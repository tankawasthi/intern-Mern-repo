import React from "react";


export default function MovieCard({ m, onWatch, onBook, adminActions }) {
    return (
        <div className="movie-card">
            <img src={m.img} alt={m.title} className="movie-img" />
            <div className="movie-overlay">
                <h3>{m.title}</h3>
                <p>{m.duration} • ⭐ {m.rating}</p>
                <p className="desc">{m.description}</p>
                <div className="movie-actions">
                    <button onClick={() => onWatch(m)}>▶ Watch</button>
                    <button onClick={() => onBook(m)} className="btn-outline">Book</button>
                    {adminActions}
                </div>
            </div>
        </div>
    );
}