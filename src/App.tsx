import React from "react";
import "./App.css";
import { Playground } from "./component/Playground";
import ticTacToe from "./game/TicTacToe";

function App() {
  const game = ticTacToe();

  const styles = {
    text: {
      fontSize: "80px",
    },
  };

  return (
    <div className="App">
      <Playground board={game.board} handleClick={game.handleClick} />
      {game.winner !== "" && (
        <div style={styles.text}>{game.winner} win!!!</div>
      )}
      <button onClick={() => game.handleRestart()}>Restart</button>
    </div>
  );
}

export default App;
