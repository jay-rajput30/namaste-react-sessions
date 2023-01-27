import { Component } from "react";

class ChildClass3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "child of child",
    };
    console.log("constructor child class 3");
  }

  componentDidMount() {
    console.log("componentDidMount child class 3");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount child class 3");
  }
  render() {
    console.log("render child class 3");
    return <p>{this.props.name}</p>;
  }
}

export default ChildClass3;
