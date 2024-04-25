import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== null)) {
      return 'draw';
    }

    return null;
  };

  const handleCellClick = (index) => {
    const newBoard = [...board];
    if (winner || newBoard[index]) {
      return;
    }

    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const updatedWinner = checkWinner(newBoard);
    if (updatedWinner) {
      setWinner(updatedWinner);
    }
  };

  const renderCell = (index) => (
    <div className="cell" onClick={() => handleCellClick(index)}>
      {board[index]}
    </div>
  );

  const renderStatus = () => {
    if (winner === 'draw') {
      return 'It\'s a draw!';
    }

    return winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      <div className="status">{renderStatus()}</div>
      <button className="reset-button" onClick={() => window.location.reload()}>Reset Game</button>
    </div>
  );
}

export default App;
