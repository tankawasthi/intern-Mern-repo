import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(previousProps, previousState) {
        console.log(previousProps.number);
        console.log(this.props.number);
        if (previousProps.number !== this.props.number) {
            console.log("Counter componentDidUpdate");
        }
    }
  render() {
    return (
      <div>
          <h1>{this.props.number}</h1>
      </div>
    )
  }
}
