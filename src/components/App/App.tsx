import React, { useState } from "react";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviePage/MoviePage";
import Nav from "../Nav/Nav";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState("");

  return (
    <>
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage poster={setSelectedPoster} />}
        />
        <Route
          path="/movie/:id"
          render={({ match }) => <MoviePage id={match.params.id} />}
          // add selectedPoster in the render
        />
      </Switch>
    </>
  );
};

export default App;
