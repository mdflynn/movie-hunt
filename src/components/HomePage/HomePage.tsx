import React, { useEffect, useState } from "react";
import "./HomePage.css";

import { getAllMovies, Movie } from "../../apiCalls";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie | []>([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.data));
  }, []);

  return <h1>Home page</h1>;
};

export default HomePage;
