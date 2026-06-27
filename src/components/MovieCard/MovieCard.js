import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">

      <img
        src={poster}
        alt={movie.Title}
      />

      <div className="movie-info">

        <h3>{movie.Title}</h3>

        <p>📅 {movie.Year}</p>

        <p>🎬 {movie.Type}</p>

        <div className="card-buttons">

          <button className="favorite-btn">
            ❤️ Favorite
          </button>

          <Link to={`/movie/${movie.imdbID}`}>
            <button className="details-btn">
              View Details
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;