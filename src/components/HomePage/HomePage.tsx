import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import "./HomePage.css";

import { fetchMovies, Movie } from "../../apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";

const HomePage: React.FC<{
  poster: Dispatch<SetStateAction<any>>;
  search: string;
  filter: string;
}> = ({ poster, search, filter }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data.data);
    });
  }, []);

  const searchMovieData = (searchCriteria: string) => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  };

  const filterMovieData = (filterCriteria: string, movieData: any) => {
    if (!filterCriteria || filterCriteria === "Default") {
      return movieData;
    }
    return movieData.filter((movie: any) => movie.genres.includes(filter));
  };

  const generateMovieThumbs = (searchCriteria: string) => {
    const searchResults = searchMovieData(searchCriteria);
    const filteredResults = filterMovieData(filter, searchResults);

    return filteredResults.map((movie: any, i: number) => (
      <MovieThumb key={i} movieData={movie} poster={poster} />
    ));
  };

  const displayMovieThumbs = generateMovieThumbs(search);

  return (
    <section className="movie-section">
      {movies && displayMovieThumbs}
      {displayMovieThumbs.length === 0 && <p>No movies by that name!</p>}
    </section>
  );
};

export default HomePage;
