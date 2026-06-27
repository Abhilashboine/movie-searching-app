import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="overlay">

        <h1>Discover Amazing Movies</h1>

        <p>
          Search millions of movies and TV shows instantly.
        </p>

        <div className="hero-buttons">

          <button className="watch-btn">
            ▶ Watch Now
          </button>

          <button className="info-btn">
            ℹ Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;