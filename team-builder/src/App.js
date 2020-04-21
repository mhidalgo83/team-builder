import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", role: "" });
  };
  return (
    <div className="App">
      <Form value={formData} onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
}

export default App;
