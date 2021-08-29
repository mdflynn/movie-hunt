import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import "./HomePage.css";

import { fetchMovies, Movie } from "../../apiCalls";
import MovieThumb from "../MovieThumb/MovieThumb";

const HomePage: React.FC<{
  poster: Dispatch<SetStateAction<any>>;
  search: string;
}> = ({ poster, search }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data.data);
      generateGenres();
    });
  }, []);

  const generateGenres = () => {
    return movies.reduce((movieGenres: string[], movie: any) => {
      movie.genres.forEach((genre: string) => {
        if (!movieGenres.includes(genre)) {
          movieGenres.push(genre);
        }
      });
      return movieGenres;
    }, []);
  };

  const filterSearchResults = (searchCriteria: string) => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  };

  const generateMovieThumbs = (searchCriteria: string) => {
    const filteredResults = filterSearchResults(searchCriteria);

    return filteredResults.map((movie, i) => (
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
