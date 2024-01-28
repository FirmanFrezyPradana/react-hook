import React, { useState } from "react";
import "../App.css";

const UseState = () => {
  function initialState() {
    console.log("Running");
    return 0;
  }
  //pemanggilan initialState() tidak efektif karena ketika diconsole maka akan terus terpanggil.jika tetap diteruskan maka akan lemot
  //panggil dengan initialState , agar hasil console tetap berjalan dan tidak terpanggil terus menerus
  // const [count, setCount] = useState(initialState);

  // const handleDecrement = () => {
  //   setCount((count) => count + 1);
  // };

  // const handleIncrement = () => {
  //   setCount(count - 1);
  // };

  //ketika berada di base maka initialState akan berbentuk object
  const [state, setState] = useState({ count: 0, name: "firman" });
  //karena berberntul object maka harus di destructur
  const { count, name } = state;

  const handleDecrement = () => {
    setState((previewState) => {
      //return { count: previewState.count + 1 }; // jika hanya dibuat seperti ini maka nilai nama ketika di klik akan menghilang
      //maka dari itu harus menggunakan spreed operator
      return { ...previewState , count: previewState.count + 1 };
    });
  };

  const handleIncrement = () => {
    // setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="hooks">UseState</div>
      <div className="content">
        <button onClick={handleDecrement}>Decrement</button>
        <div>{count}</div>
        <div>{name}</div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default UseState;
