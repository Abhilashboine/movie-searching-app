import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        const data =
            JSON.parse(localStorage.getItem("favorites")) || [];

        setFavorites(data);

    }, []);

    return (

        <div style={{ padding: "30px" }}>

            <h1
                style={{
                    color: "white",
                    textAlign: "center"
                }}
            >
                ❤️ Favorite Movies
            </h1>

            {
                favorites.length === 0 ?

                    <h2
                        style={{
                            color: "white",
                            textAlign: "center"
                        }}
                    >
                        No Favorite Movies
                    </h2>

                    :

                    <div className="movie-list">

                        {

                            favorites.map(movie => (

                                <MovieCard
                                    key={movie.imdbID}
                                    movie={movie}
                                />

                            ))

                        }

                    </div>

            }

        </div>

    );

}

export default Favorites;