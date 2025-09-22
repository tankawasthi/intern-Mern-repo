import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const nav = useNavigate();
    const [error, setError] = useState("");

    const handle = async (e) => {
        e.preventDefault();
        const res = login({ email, password });
        if (!res.error) nav("/");
    }
    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handle}>
                <h2>Login</h2>
                <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}