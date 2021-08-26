import React, { useEffect, useState } from "react";
import "./HomePage.css";

import { fetchMovies, Movie } from "../../apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data.data));
  }, []);

  const generateMovieThumbs = () => {
    return movies.map((movie, i) => <MovieThumb key={i} movieData={movie} />);
  };

  return <section className="movie-section">{movies && generateMovieThumbs()}</section>;
};

export default HomePage;
