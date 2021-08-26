import React, { useEffect } from "react";
import "./HomePage.css";

import { getAllMovies } from "../../apiCalls";

const HomePage: React.FC = () => {
  useEffect(() => {
    getAllMovies().then((data) => console.log(data.data));
  });

  return <h1>Home page</h1>;
};

export default HomePage;
