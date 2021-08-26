import React from "react";
import "./MovieThumb.css";

import { Movie } from "../../apiCalls";

function importAll(r: any) {
    return r.keys().map(r);
  }
  
const movieThumbImages = importAll(require.context('../../assets/moviePosterImages', false, /\.(png|jpe?g|svg)$/));


interface Props {
  key: number;
  movieData: Movie;
}

const MovieThumb: React.FC<Props> = ({ movieData }) => {
  return <img src={movieThumbImages[1].default} />
};

export default MovieThumb;
