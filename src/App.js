import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/slice'; // Import the Redux actions

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button onClick={() => dispatch(increment())}>+</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
