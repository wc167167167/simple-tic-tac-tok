import { Component } from "react";

interface Props {
  index: number;
  value: string;
  handleClick(index: number): void;
}

export default class Grid extends Component<Props> {
  render() {
    const styles = {
      grid: {
        width: "100px",
        height: "100px",
        fontSize: "46px",
      },
    };

    return (
      <button
        style={styles.grid}
        onClick={() => this.props.handleClick(this.props.index)}
      >
        {this.props.value}
      </button>
    );
  }
}
