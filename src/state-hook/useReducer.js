import React, { useState, useReducer } from "react";
import "../App.css";

function reducer(state, action) {
  switch (action.type) {
    //PENULISA yang dapat memebuat error
    // case "increment":
    case ACTION.INCREMENT :
      return { count: state.count - 1 };
    // case "decrement":
    case ACTION.DECREMENT :
      return { count: state.count + action.payload};
  }
}
const ACTION = {
  DECREMENT : 'decrement',
  INCREMENT : 'increment'
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleDecrement = () => {
    dispatch({ type: ACTION.DECREMENT, payload: 20 });
  };
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };


  return (
    <div className="container">
      <div className="hooks">UseState</div>
      <div className="content">
        <button onClick={handleDecrement}>Decrement</button>
        <div>{state.count}</div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};
export default UseReducer;
