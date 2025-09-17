import React, { useState } from "react";


export default function MovieForm({ initial = {}, onSubmit, onCancel }) {
    const [title, setTitle] = useState(initial.title || "");
    const [img, setImg] = useState(initial.img || "");
    const [description, setDescription] = useState(initial.description || "");
    const [duration, setDuration] = useState(initial.duration || "");
    const [rating, setRating] = useState(initial.rating || "");


    const handle = (e) => {
        e.preventDefault();
        onSubmit({ ...initial, title, img, description, duration, rating: parseFloat(rating) });
    };


    return (
        <form onSubmit={handle} className="movie-form">
            <label>Title<input value={title} onChange={(e) => setTitle(e.target.value)} required /></label>
            <label>Image URL<input value={img} onChange={(e) => setImg(e.target.value)} required /></label>
            <label>Description<textarea value={description} onChange={(e) => setDescription(e.target.value)} required /></label>
            <label>Duration<input value={duration} onChange={(e) => setDuration(e.target.value)} /></label>
            <label>Rating<input type="number" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} /></label>
            <div className="form-actions">
                <button type="submit">Save</button>
                <button type="button" className="btn-outline" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}