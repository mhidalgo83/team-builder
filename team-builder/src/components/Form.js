import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
    console.log(props);
  return (
    <form onSubmit={props.onSubmit}>
      Form
      <Input
        htmlFor="Name"
        name="name"
        onChange={props.onChange}
        value={props.value.name}
        type="text"
        placeholder="Name"
      />
      <Input
        htmlFor="Email"
        name="email"
        onChange={props.onChange}
        value={props.value.email}
        type="email"
        placeholder="email@email.com"
      />
      <Input
        htmlFor="Role"
        name="role"
        onChange={props.onChange}
        value={props.value.role}
        type="text"
        placeholder="Role"
      />
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
