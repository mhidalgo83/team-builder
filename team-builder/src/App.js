import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="App">
      <Form onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
}

export default App;
