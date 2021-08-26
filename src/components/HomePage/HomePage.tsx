import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import "./HomePage.css";

import { fetchMovies, Movie } from "../../apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";

const HomePage: React.FC<{
  poster: Dispatch<SetStateAction<any>>;
}> = ({ poster }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data.data));
  }, []);

  const generateMovieThumbs = () => {
    return movies.map((movie, i) => (
      <MovieThumb key={i} movieData={movie} poster={poster} />
    ));
  };

  return (
    <section className="movie-section">
      {movies && generateMovieThumbs()}
    </section>
  );
};

export default HomePage;
