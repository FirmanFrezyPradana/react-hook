import React, { useId } from "react";

const Form = ({ text }) => {
  //digunakan untuk 1 id
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input id={id} type="text" />
      {/* untuk menggunakan lebih dari 2 id */}
      <label htmlFor={`${id}-1`}>{text}</label>
      <input id={`${id}-1`} type="text" />
    </>
  );
};

export default Form;
