import React, { Dispatch, SetStateAction } from "react";
import "./MovieThumb.css";
import { Link } from "react-router-dom";

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
  poster: Dispatch<SetStateAction<any>>;
}
// make dynamic for MovieThumb and Movie
const findMovieThumbImage = (id: string) => {
  return movieThumbImages.find((movie: any) => movie.default.includes(id));
};

const MovieThumb: React.FC<Props> = ({ movieData, poster }) => {
  const getImage = findMovieThumbImage(movieData.id);
  // move image import to App to pass down

  const movieImage =
    getImage === undefined ? movieThumbImages[33].default : getImage.default;

  return (
    <Link to={`movie/${movieData.id}`}>
      <article className="thumb-article" onClick={() => poster(movieImage)}>
        <img className="thumb-img" src={movieImage} alt={movieData.title} />
        <h1 className="thumb-title">{movieData.title}</h1>
      </article>
    </Link>
  );
};

export default MovieThumb;
