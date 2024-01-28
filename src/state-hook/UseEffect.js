import React, { useEffect, useState } from "react";
import "../App.css";
import Todos from "../componen/Todos";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  //   useEffect(() => {
  //     console.log("use effect runing");
  //     setCount((previewTerm) => previewTerm + 1);
  //   },[setCount2]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const handleDecrement = () => {
    setCount((previewTerm) => previewTerm + 1);
  };
  const handleIncrement = () => {
    setCount((previewTerm) => previewTerm - 1);
    setCount2((previewTerm) => previewTerm + 1);
  };
  return (
    <div className="container">
      <div className="hooks">UseEffect</div>
      <div className="content">
        <button onClick={handleDecrement}>Decrement</button>
        <div>{count}</div>
        <div>{count2}</div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
          {todos.map((todo) => {
            return <Todos todo={todo} />;
          })}
        </div>
    </div>
  );
};

export default UseEffect;
