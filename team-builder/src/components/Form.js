import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import styled from "styled-components"

const TeamForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: space-around;
  align-content: center;
`



const Form = (props) => {
  return (
    <TeamForm onSubmit={props.onSubmit}>
      <FormInput
        htmlFor="Name"
        name="name"
        onChange={props.onChange}
        value={props.value.name}
        type="text"
        placeholder="First/Last Name"
      />
      <FormInput
        htmlFor="Email"
        name="email"
        onChange={props.onChange}
        value={props.value.email}
        type="email"
        placeholder="email@email.com"
      />
      <FormInput
        htmlFor="Role"
        name="role"
        onChange={props.onChange}
        value={props.value.role}
        type="text"
        placeholder="Role"
      />
      <FormButton>Submit</FormButton>
    </TeamForm>
  );
};

export default Form;
