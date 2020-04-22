import React from "react";
import styled from "styled-components";


const Card =styled.div`
margin: 2%;
`

const TeamMember = (props) => {
  return (
    <Card>
      <h2>Name: {props.teamMember.name}</h2>
      <h4>Email: {props.teamMember.email}</h4>
      <h4>Role: {props.teamMember.role}</h4>
    </Card>
  );
};

export default TeamMember;
