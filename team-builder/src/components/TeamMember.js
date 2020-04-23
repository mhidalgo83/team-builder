import React from "react";
import styled from "styled-components";
import FormButton from "./FormButton";

const Button = styled(FormButton)`
  width: 25%;
  padding: 1%;
  background: #87df1d;
`;

const Card = styled.div`
  margin: 2% 1.25%;
  width: 50%;
`;

const Label = styled.h2`
  margin: 1% 0;
`;

const TeamMember = ({editMember, teamMember}) => {
//   console.log(props);
  return (
    <Card>
      <Label>Name: {teamMember.name}</Label>
      <Label>Email: {teamMember.email}</Label>
      <Label>Role: {teamMember.role}</Label>
      <Button onClick={editMember}>Edit</Button>
    </Card>
  );
};

export default TeamMember;
