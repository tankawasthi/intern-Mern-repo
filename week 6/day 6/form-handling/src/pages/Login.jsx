import {useState} from "react";
import { Link } from "react-router-dom";

const Login=()=>{

    // initialize the state for email and password
    const [email, setEmail]=useState(" ");
    const [password, setPassword]=useState(" ");

    // handling input change and update state

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    };

    // handle form Submittion
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("logged with:",{email,password});
        alert(`logged in with Email:${email}`);
        setEmail('');
        setPassword('');
    };
    return(
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-card">
                <h2>Login</h2>
                <div className="form-group">
                <label htmlFor="email">EMail</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required />
                </div>
                <div>
                    <button type="submit" className="submit-btn">Login</button>
                </div>
            </form>
            <p className="link-text">
                Don't have an accunt?<Link to="/Signup" className="signup-link">Signup</Link>

            </p>
        </div>
        </>
    );
};
export default Login