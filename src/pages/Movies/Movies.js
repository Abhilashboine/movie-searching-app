import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";

import "./Movies.css";

const API_KEY = "a972d32c"; // Replace with your API key

function Movies() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (movie) => {

    if(movie.trim()==="") return;

    setLoading(true);
    setError("");

    try{

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`
      );

      if(response.data.Response==="True"){

        setMovies(response.data.Search);

      }else{

        setMovies([]);
        setError(response.data.Error);

      }

    }
    catch{

      setError("Something went wrong");

    }
    finally{

      setLoading(false);

    }

  };

  useEffect(()=>{

    searchMovies("Avengers");

  },[]);

  return(

    <div className="movies-page">

      <h1>🎬 Movies</h1>

      <SearchBar onSearch={searchMovies}/>

      {loading && <Loader/>}

      {error && <h2>{error}</h2>}

      {!loading && !error &&

        <MovieList movies={movies}/>

      }

      <Footer/>

    </div>

  );

}

export default Movies;