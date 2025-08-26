import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole]= useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password,role);
      console.log(name, email, password, role)
      alert("Registered successfully, please login.");
      navigate("/login");
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
      value={role}
      onChange={(e)=>setRole(e.target.value)}
      
      >
        <option value='user'>User</option>
        <option value='admin'>Admin</option>
        <option value='editor'>Editor</option>
         </select>
      <button type="submit">Register</button>
    </form>
  );
}
