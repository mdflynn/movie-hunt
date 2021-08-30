import React, { Dispatch, SetStateAction } from "react";
import "./MovieThumb.css";
// @ts-ignore
import { Link } from "react-router-dom";

import { Movie } from "../../apiCalls";
import { findMovieThumbImage } from "../../utilities";
import defaultImage from "../../assets/moviePosterImages/defaultImage.jpeg";
import moviePosterImages from "../../assets/moviePosterImages";

interface Props {
  key: number;
  movieData: Movie;
  poster: Dispatch<SetStateAction<any>>;
}

const MovieThumb: React.FC<Props> = ({ movieData, poster }) => {
  const getImage = findMovieThumbImage(movieData.id, moviePosterImages);

  const movieImage = getImage === undefined ? defaultImage : getImage;

  return (
    <Link className="link-style" to={`movie/${movieData.id}`}>
      <article className="thumb-article" onClick={() => poster(movieImage)}>
        <img className="thumb-img" src={movieImage} alt={movieData.title} />
        <h1 className="thumb-title">{movieData.title}</h1>
      </article>
    </Link>
  );
};

export default MovieThumb;
