import React, { useState, useEffect } from "react";

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch('https://randomuser.me/api/?results=1');
                const data = await response.json();
                setUser(data.results[0]);
            } catch (err) {
                console.error("Failed to fetch the user:", err);
            } finally {
                setLoading(false)
            }

        }
        fetchUser();
    }, []);
    if (loading) {
        return <div>loading......</div>
    }
    if (!user) {
        return <div>No user found.</div>;
    }
    return (
        <div>
            <h2>user profile</h2>
            <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <img src={user.picture.large} alt="User" />

        </div>
    )
}
export default UserProfile;