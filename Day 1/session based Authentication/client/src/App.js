import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true; // allow cookies

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:5000/register", { username, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  const getDashboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/dashboard");
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Unauthorized");
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/logout");
      setMessage("Logged out");
    } catch {
      setMessage("Logout failed");
    }
  };

  // 👇 This return MUST be inside the App function
  return (
    <div style={{ padding: "20px" }}>
      <h2>Session Auth Example</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={getDashboard}>Get Dashboard</button>
      <button onClick={logout}>Logout</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
