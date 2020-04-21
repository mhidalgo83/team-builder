import React from "react";

const Input = (props) => {
    console.log(props);
  return (
    <label htmlFor={props.htmlFor}>
      {props.htmlFor}:
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      ></input>
    </label>
  );
};

export default Input;
