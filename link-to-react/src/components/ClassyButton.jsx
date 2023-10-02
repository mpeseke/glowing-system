import { Component } from "react";

class ClassyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>count is {this.state.count}</button>
    );
  }
}

export default ClassyButton;
