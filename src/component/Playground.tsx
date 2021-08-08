import { Component } from "react";
import Grid from "./Grid";

interface Props {
  board: string[];
  handleClick(index: number): void;
}

export class Playground extends Component<Props> {
  render() {
    const styles = {
      board: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        width: "300px",
      },
    };

    return (
      <div style={styles.board}>
        {this.props.board.map((value, index) => (
          <Grid
            index={index}
            value={value}
            handleClick={this.props.handleClick}
          />
        ))}
      </div>
    );
  }
}
