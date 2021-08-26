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
  return <h1>Movie Page</h1>
};

export default MoviePage;
