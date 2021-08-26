import React, { useState } from "react";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviePage/MoviePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/movie/:id"
        render={({ match }) => <MoviePage id={match.params.id} />}
      />
    </Switch>
  );
}

export default App;
