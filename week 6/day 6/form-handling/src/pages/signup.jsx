
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Signup = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [message, setMessage] = useState("");

    const togglePasswordVisibility = () => {
        if (passwordRef.current.type === "password") {
            passwordRef.current.type = "text";
            setShowPassword(true);
        } else {
            passwordRef.current.type = "password";
            setShowPassword(false);
        }
    };
    const toggleConfirmPasswordVisibility = () => {
        if (confirmPasswordRef.current.type === 'password') {
            confirmPasswordRef.current.type = 'text';
            setShowConfirm(true);
        } else {
            confirmPasswordRef.current.type = 'password';
            setShowConfirm(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const confirmPassword = confirmPasswordRef.current.value.trim();

        if (!name || !email || !password || !confirmPassword) {
            setMessage('Please fill in all fields.')
            return;
        }
        if (password !== confirmPassword) {
            setMessage('password doesnt matches')
            return;
        }
        console.log('User registered with:', { name, email, password });
        setMessage('Registered successfully!');

        nameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';
    }
    return (
       <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Sign Up</h2>
        {message && (
          <p className={`form-message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        {/* Input fields */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" ref={nameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} />
        </div>

        {/* Password input with toggle icon */}
        <div className="form-group password-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" ref={passwordRef} />
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm password input with toggle icon */}
        <div className="form-group password-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmPasswordRef} />
          <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
            {confirmPasswordRef ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      <p className="link-text">
        Already have an account? <Link to="/login" className="signup-link">Log in</Link>
      </p>
    </div>
    );
};


export default Signup