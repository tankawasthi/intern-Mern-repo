import React, { useState } from "react";
import axios from "../utils/api";   // Axios instance
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ handleLogin function
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form default behavior
    try {
      const res = await axios.post("/auth/login", { email, password });
      toast.success(res.data.message || "Login successful!");
      localStorage.setItem("token", res.data.token); // store token
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Login</button>
    </form>
  );
}
