import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      Form
      <Input
        htmlFor="Name"
        name="name"
        onChange={props.onChange}
        value={props.user}
        type="text"
        placeholder="Name"
      />
      <Input
        htmlFor="Email"
        name="email"
        onChange={props.onChange}
        value={props.email}
        type="email"
        placeholder="email@email.com"
      />
      <Input
        htmlFor="Role"
        name="role"
        onChange={props.onChange}
        value={props.role}
        type="text"
        placeholder="Role"
      />
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
