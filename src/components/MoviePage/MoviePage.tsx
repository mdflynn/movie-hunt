import React, { useEffect, useState } from "react";
import "./MoviePage.css";

import { fetchMovies, SingleMovie } from "../../apiCalls";

const movieBackgrounds = importAll(
  require.context("../../assets/movieHeroImages", false, /\.(png|jpe?g|svg)$/)
);

function importAll(r: any) {
  return r.keys().map(r);
}

const MoviePage: React.FC<{ id: string }> = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState<any>({});

  useEffect(() => {
    fetchMovies(id).then((data) => setSelectedMovie(data.data));
  }, [id]);

  // duplicate refactor
  const findMovieThumbImage = (id: string) => {
    return movieBackgrounds.find((movie: any) => movie.default.includes(id));
  };
  // duplicate refactor
  const getImage = findMovieThumbImage(id);

  // duplicate refactor
  const movieImage =
    getImage === undefined ? movieBackgrounds[33].default : getImage.default;

  return (
    <section className="movie-detail-section">
      <img
        className="background-img"
        src={movieImage}
        alt={selectedMovie.title}
      />
    </section>
  );
};

export default MoviePage;
