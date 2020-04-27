import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

import TeamMember from "./components/TeamMember";

const teamMembers = [
  {
    name: "Dwight Schrute",
    email: "dwight@schrutefarms.com",
    role: "Assistant Regional Manager",
  },
  {
    name: "Leslie Knope",
    email: "leslie@knopeisdope.com",
    role: "Deputy Parks Director",
  },
  {
    name: "Tom Haverford",
    email: "tommy@rentaswag.com",
    role: "CEO/Entrepreneur",
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [members, setMembers] = useState(teamMembers);
  console.log(members);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addMember = (formData) => {
    const newMember = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };
    setMembers([...members, newMember]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(formData);
    setFormData({ name: "", email: "", role: "" });
  };

  const editMember = (teamMember) => {
    setMemberToEdit(teamMember);
    setFormData({
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    });
  };

  return (
    <div className="App">
      <Form
        value={formData}
        onSubmit={handleSubmit}
        onChange={handleChange}
        memberToEdit={memberToEdit}
      />
      {members.map((teamMember, index) => {
        return (
          <TeamMember
            key={index}
            teamMember={teamMember}
            // editMember={() => editMember(teamMember)}
          />
        );
      })}
    </div>
  );
}

export default App;
