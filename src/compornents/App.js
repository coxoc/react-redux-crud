import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this._changeCount(1)
  }

  handleMinusButton = () => {
    this._changeCount(-1)
  }

  _changeCount = (value) => {
    this.setState({ count: this.state.count + value })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    )
  }
}

export default App;
