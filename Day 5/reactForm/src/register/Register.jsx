import { useState } from 'react';

export default function Register({ switchPage }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");


    const handleSubmit = (e) => {
        e.preventDefaul();
        if (password !== confirm) {
            alert("Password  do not match!");
            return;
        }
        alert(`Registered with Name:${name}, Email:${email}`);
    };
    return (
        <div className='auth-card'>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='auth-input'
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    required
                />
                <input
                    type="password"
                    placeholder='confirm passoword'
                    value={confirm}
                    onChange={(e) => { setConfirm(e.target.value) }}
                    className='auth-input'
                    required
                />
                <button type="submit" className="auth-button">Register</button>
            </form>
            <p className='auth-toggle'>
                Already have an account? {" "}
                <button onClick={() => { switchPage("login") }} >LogIn</button>
            </p>


        </div>
    )

}