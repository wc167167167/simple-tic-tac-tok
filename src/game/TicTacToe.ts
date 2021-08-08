import { useEffect, useState } from "react";

interface TicTacToe {
  board: string[];
  isFinished: boolean;
  winner: string;
  handleClick: (index: number) => void;
  handleRestart: () => void;
}

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (): TicTacToe => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [steps, setSteps] = useState(0);
  const [isFinished, setFinish] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (isFinished === true) return;

    let winningPositionsIndex = 0;
    let w: string | null = null;
    while (winningPositionsIndex < winningPositions.length && !w) {
      const boardPositionsToCheck = winningPositions[winningPositionsIndex];
      const boardValuesToCkeck = boardPositionsToCheck.map(
        (index) => board[index]
      );
      const checkingValue = boardValuesToCkeck[0];
      const isFinished = boardValuesToCkeck.every(
        (value) => value === checkingValue && checkingValue
      );

      w = !isFinished ? null : checkingValue;
      winningPositionsIndex++;
    }

    if (w) {
      setWinner(w === "X" ? "You" : "AI");
      setFinish(true);
      return;
    }

    setFinish(board.filter((value) => !value).length > 9);
  }, [board, winner, isFinished]);

  const handleClick = (index: number) => {
    if (index < 0 || index > 8 || isFinished || board[index] !== "") {
      return;
    }

    var currentSteps = steps;

    var newBoard = [...board];
    newBoard.splice(index, 1, "X");
    setBoard(newBoard);
    currentSteps += 1;

    var randomNext = -1;
    while (currentSteps < 9 && newBoard[randomNext] !== "") {
      randomNext = Math.floor(Math.random() * 8);
    }

    if (randomNext >= 0) {
      newBoard = [...newBoard];
      newBoard.splice(randomNext, 1, "Y");
      setBoard(newBoard);
      currentSteps += 1;
    }

    setSteps(currentSteps);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setFinish(false);
    setSteps(0);
  };

  return {
    board,
    isFinished,
    winner,
    handleClick,
    handleRestart,
  };
};
