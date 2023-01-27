import { Component } from "react";
import React from "react";

class ChildClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      changed: 0,
    };
    // this.setCount = this.setCount.bind(this);
    console.log("constructor child class 1");
    this.timer = 0;
  }
  setCount = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
      changed: state.changed + 1,
    }));
  };
  componentDidMount() {
    console.log("componentDidMount child class 1");
    // this.timer = setInterval(() => console.log("set timeout called"), 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount child class 1");
    clearInterval(this.timer);
  }
  render() {
    console.log("render child class 1");
    return (
      <>
        <small>Current value of counter: {this.state.counter}</small>
        <small>counter was changed {this.state.changed} times</small>
        <button onClick={this.setCount}>+</button>
        <br />
      </>
    );
  }
}

export default ChildClass;
