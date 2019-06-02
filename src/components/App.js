import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../actions';

class App extends Component {
  render() {
    console.log(this.props);
    const props = this.props

    return (
      <>
        <div>value: {props.counter}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.reset}>reset</button>
      </>
    )
  }
}

const mapStateToProps = state => ({ counter: state.count.counter })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
