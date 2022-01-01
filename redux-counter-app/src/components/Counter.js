import { Component } from 'react';
import classes from './Counter.module.css';

import { useSelector, useDispatch, connect } from 'react-redux'
import { counterActions } from '../store/counterStore'

const Counter = () => {
  const counterDispatch = useDispatch()
  const {counter, showCounter} = useSelector(state => state.counter)


  const incrementHandler = () => counterDispatch(counterActions.increment())
  const decrementHandler = () => counterDispatch(counterActions.decrement())
  const increaseHandler = () => counterDispatch(counterActions.increase(5))
  const toggleCounterHandler = () => counterDispatch(counterActions.toggleCounter())

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.actions}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment({type: 'increment'})
//   }
//   decrementHandler(){
//     this.props.decrement({type: 'decrement'})
//   }
//   toggleHandler(){
//   }
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={classes.actions}>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// } 
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: action => dispatch(action),
//     decrement: action => dispatch(action)
//   }
// } 
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
