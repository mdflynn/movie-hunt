import React, { useState } from "react";

import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviePage/MoviePage";
import Nav from "../Nav/Nav";
// @ts-ignore
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<string>("");
  const [searchCriteria, setSearchCriteria] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  return (
    <>
      <Nav
        search={setSearchCriteria}
        criteria={searchCriteria}
        filter={setSelectedGenre}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              poster={setSelectedPoster}
              search={searchCriteria}
              filter={selectedGenre}
            />
          )}
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
