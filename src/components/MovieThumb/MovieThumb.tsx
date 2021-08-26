import React from "react";
import "./MovieThumb.css";

import { Movie } from "../../apiCalls";

const movieThumbImages = importAll(
  require.context("../../assets/moviePosterImages", false, /\.(png|jpe?g|svg)$/)
);

function importAll(r: any) {
    return r.keys().map(r);
  }

interface Props {
  key: number;
  movieData: Movie;
}


const findMovieThumbImage = (id: string) => {
  return movieThumbImages.find((movie: any) => movie.default.includes(id)).default;
};

const MovieThumb: React.FC<Props> = ({ movieData }) => {
  return (
    <article className="thumb-article">
      <img className="thumb-img" src={findMovieThumbImage(movieData.id)} />
      <h1 className="thumb-title">{movieData.title}</h1>
    </article>
  );
};

export default MovieThumb;
