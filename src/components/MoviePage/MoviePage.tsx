import React from "react";
import "./MoviePage.css";

const MoviePage: React.FC<{ id: string }> = ({ id }) => {
    console.log(id)
  return <h1>Movie Page</h1>;
};

export default MoviePage;
