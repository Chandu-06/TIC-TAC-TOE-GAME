let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

window.onload = startGame;

function startGame() {
  document.getElementById("board").style.display = "grid";
}

function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      displayResult(`${currentPlayer} wins!`);
      gameOver = true;
      return;
    }
  }

  if (board.every(cell => cell !== '')) {
    displayResult("It's a draw!");
    gameOver = true;
  }
}

function renderBoard() {
  board.forEach((cell, index) => {
    document.getElementsByClassName('cell')[index].innerText = cell;
  });
}

function displayResult(message) {
  document.getElementById('resultText').innerText = message;
  document.getElementById('resultPopup').classList.add('show');
}

function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  document.getElementById('resultPopup').classList.remove('show');
  renderBoard();
}
