import React from "react";
import Toggle from "./Toggle";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();
    const nav = useNavigate();

    return (
        <header className="nav">
            <div className="logo" onClick={() => nav("/")}>MOVIE-FLIX</div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                {user && user.role === "admin" && <Link to="/admin">Admin</Link>}
                {user && user.role === "user" && <Link to="/me">My Bookings</Link>}
            </nav>

            <div className="nav-actions">
                <Toggle />
                {!user ? (
                    <>
                        <Link to="/login" className="btn">Login</Link>
                        <Link to="/signup" className="btn btn-outline">Signup</Link>
                    </>
                ) : (<>
                    <span className="user">{user.name} ({user.role})</span>
                    <button className="btn" onClick={() => logout()}>Logout</button>
                </>)
                }

            </div>

        </header>
    )
}