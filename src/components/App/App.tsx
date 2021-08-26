import React from "react";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import MovieThumb from "../MovieThumb/MovieThumb";
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
