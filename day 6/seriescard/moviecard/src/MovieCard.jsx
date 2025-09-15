import React from "react";
import seriesData from "./api/Series.json";
import "./index.css";

function MovieCard() {
  return (
    <div className="card-container">
      {seriesData.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
            <h3 className="card-rating">⭐ IMDB: {item.rating}</h3>
            <p className="card-summary">{item.summary}</p>
            <a
              href={item.trailer}
              className="card-trailer"
              target="_blank"
              rel="noreferrer"
            >
              🎬 Watch Trailer
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
