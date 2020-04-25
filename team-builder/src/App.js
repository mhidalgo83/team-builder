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
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    teamMembers.push(formData);
    setFormData({ name: "", email: "", role: "" });
    setIsEditing(false);
  };

  const editMember = (teamMember) => {
    setIsEditing(true);
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
        isEditing={isEditing}
      />
      {teamMembers.map((teamMember, i) => {
        return (
          <TeamMember
            key={i}
            teamMember={teamMember}
            editMember={() => editMember(teamMember)}
            isEditing={isEditing}
          />
        );
      })}
    </div>
  );
}

export default App;
