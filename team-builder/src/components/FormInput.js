import React from "react";
import styled from "styled-components";

const Input = styled.input`
width: 80%;
`

const Label = styled.label`
display: flex;
justify-content: space-between;
align-content: center;
margin: 3% 5%;
`

const FormInput = (props) => {
  console.log(props);
  return (
    <Label htmlFor={props.htmlFor}>
      {props.htmlFor}: 
      <Input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required
      ></Input>
    </Label>
  );
};

export default FormInput;
