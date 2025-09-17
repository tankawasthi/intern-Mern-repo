import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup } = useAuth();
    const nav = useNavigate();


    const handle = async (e) => {
        e.preventDefault();
        const res = signup({ name, email, password, role: 'user' });
        if (!res.error) nav('/login');
    };


    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handle}>
                <h2>Signup</h2>
                <label>Name<input value={name} onChange={(e) => setName(e.target.value)} required /></label>
                <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                <button type="submit">Create account</button>
            </form>
        </div>
    );
}