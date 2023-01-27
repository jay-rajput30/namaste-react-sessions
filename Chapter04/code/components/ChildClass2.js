import { Component } from "react";
import ChildClass3 from "./ChildClass3";

class ChildClass2 extends Component {
  constructor(props) {
    super(props);
    console.log("constructing Child class 2");
  }
  componentDidMount() {
    console.log("componentDidMount child class 2");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount child class 2");
  }
  render() {
    console.log("render Child class 2");
    return (
      <>
        <small>Made by {this.props.name}</small>
        <ChildClass3 name={"this is child of child props"} />
      </>
    );
  }
}

export default ChildClass2;
