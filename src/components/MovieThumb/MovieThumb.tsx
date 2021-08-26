import React from "react";
import "./MovieThumb.css";

import { Movie } from "../../apiCalls";

interface Props {
  key: number;
  movieData: Movie;
}

const MovieThumb: React.FC<Props> = ({ movieData }) => {
  return <h1>MovieThumb</h1>;
};

export default MovieThumb;
