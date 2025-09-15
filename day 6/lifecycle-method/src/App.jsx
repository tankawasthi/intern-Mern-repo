import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0, // use ':' not '='
    };
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
      <Counter number={this.state.count}/>
        <button onClick={()=>{this.increment()}}>Click Count increment</button>
        <button onClick={()=>{this.decrement()}}>Click Count decrement</button>
      </div>
    );
  }
}

export default App;
