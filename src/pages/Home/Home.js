import React from "react";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <>
      <Hero />

      <section className="about">

        <h2>Welcome to MovieHub</h2>

        <p>
          Discover thousands of movies with ratings,
          posters, and detailed information.
        </p>

      
<button onClick={() => navigate("/movies")}>
  Explore Movies
</button>

      </section>

      <Footer />

    </>
  );
}

export default Home;