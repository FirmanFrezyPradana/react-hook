import React, { useState, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="Input" />
      <button onClick={focus}>Focus ke Input</button>
    </>
  );
};

export default UseRef;
