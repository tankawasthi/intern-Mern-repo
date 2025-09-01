import {useState} from "react";

export default function Login ({switchPage}) {
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        //e.preventDefault() is a method that prevents the default action of an event from happening
        // commonly used in React and plain JS inside event handler like onSubmit, onCLick etc
        alert(`login with Email: ${email}, Password: ${password}`);
    };

    return(
        <div className="auth-card">
            <h3>login</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} 
                className="auth-input"
                required
                />
                <input 
                type="password"
                 placeholder="enter password"
                 value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
                 className="auth-input"
                 required
                />

                <button type="submit" className="auth-button">Log In</button>
            </form>
            <p className="auth-toggle">
                Dont have an Account?{" "}
                <button onClick={()=>switchPage("register")}>Register</button>

            </p>

        </div>
    )

   
}