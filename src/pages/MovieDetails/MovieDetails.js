import React,{useEffect,useState} from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";
import "./MovieDetails.css";

const API_KEY="a972d32c";

function MovieDetails(){

const {id}=useParams();

const navigate=useNavigate();

const [movie,setMovie]=useState(null);

const getMovie=async()=>{

try{

const response=await axios.get(

`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`

);

setMovie(response.data);

}

catch(error){

console.log(error);

}

};

useEffect(()=>{

getMovie();

},[id]);


if(!movie){

return <h2>Loading...</h2>

}

return(

<div className="details-container">

<button
onClick={()=>navigate(-1)}
>

← Back

</button>

<img
src={movie.Poster}
alt={movie.Title}
/>

<h1>{movie.Title}</h1>

<p><b>⭐ IMDb :</b> {movie.imdbRating}</p>

<p><b>📅 Year :</b> {movie.Year}</p>

<p><b>🎭 Genre :</b> {movie.Genre}</p>

<p><b>🎬 Director :</b> {movie.Director}</p>

<p><b>👨 Actors :</b> {movie.Actors}</p>

<p><b>⏳ Runtime :</b> {movie.Runtime}</p>

<p>{movie.Plot}</p>

</div>

)

}

export default MovieDetails;