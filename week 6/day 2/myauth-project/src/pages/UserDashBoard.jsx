import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';


export default function UserDashboard() {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        const raw = localStorage.getItem('nf_bookings_v1');
        setBookings(raw ? JSON.parse(raw).filter(b => b.userId === user?.id) : []);
    }, [user]);


    return (
        <div className="page">
            <h2>My Bookings</h2>
            {!bookings.length ? <p>No bookings yet.</p> : (
                <ul>
                    {bookings.map(b => (
                        <li key={b.id}>{b.movieId} • seats: {b.seats} • {new Date(b.date).toLocaleString()}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}