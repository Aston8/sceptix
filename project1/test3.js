let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let currentPlayer = 'X'; 

function placeMarker(cell) {
  const index = Array.from(cell.parentNode.children).indexOf(cell);

  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
      gameActive = false;
    } else if (!gameBoard.includes('')) {
      alert("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
  });
}
