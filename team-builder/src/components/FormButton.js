import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 90%;
  margin: auto;
  border-radius: 10px;
  border: none;
  padding: 2%;
`;

const FormButton = (props) => {
  return <Button onClick={props.onClick} className={props.className}>{props.children}</Button>;
};

export default FormButton;
