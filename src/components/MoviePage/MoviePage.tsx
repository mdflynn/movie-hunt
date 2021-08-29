import React, { useEffect, useState } from "react";
import "./MoviePage.css";

import { fetchMovies, SingleMovie } from "../../apiCalls";

const movieBackgrounds = importAll(
  require.context("../../assets/movieHeroImages", false, /\.(png|jpe?g|svg)$/)
);
// duplicate
function importAll(r: any) {
  return r.keys().map(r);
}

const MoviePage: React.FC<{ id: string }> = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState<any>({});

  useEffect(() => {
    fetchMovies(id).then((data) => setSelectedMovie(data.data));
  }, [id]);

  // duplicate refactor
  const findMovieThumbImage = (id: string) => {
    return movieBackgrounds.find((movie: any) => movie.default.includes(id));
  };
  // duplicate refactor
  const getImage = findMovieThumbImage(id);

  // duplicate refactor
  const movieImage =
    getImage === undefined ? movieBackgrounds[33].default : getImage.default;

  const getCategoryDetails = (category: string) => {
    const movieInfoNeeded =
      category === "genre" ? selectedMovie.genres : selectedMovie.topCast;

    return movieInfoNeeded.reduce(
      (categoryDetails: string, categoryItem: any, i: number) => {
        if (i === movieInfoNeeded.length - 1) {
          category === "genre"
            ? (categoryDetails += categoryItem)
            : (categoryDetails += categoryItem.name);
        } else {
          category === "genre"
            ? (categoryDetails += categoryItem + ", ")
            : (categoryDetails += categoryItem.name + ", ");
        }

        return categoryDetails;
      },
      ""
    );
  };

  const getDirector = () => {
    return selectedMovie.topCast.find(
      (movie: { name: string; characterName: string }) =>
        movie.characterName === null
    ).name;
  };

  const convertRuntime = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);

    const hourDisplay = hours + "h";
    const minuteDisplay = minutes > 0 ? minutes + "m" : "";

    return hourDisplay + " " + minuteDisplay;
  };

  const movieUpdated = Object.keys(selectedMovie).length;

  return (
    <section className="movie-detail-section">
      <img
        className="background-img"
        src={movieImage}
        alt={selectedMovie.title}
      />
      <article className="movie-info">
        <h1>{selectedMovie.title}</h1>
        <p>{selectedMovie.description}</p>
        <div className="movie-sub-details">
          <p>{movieUpdated && getCategoryDetails("genre")} ●</p>
          <p>{selectedMovie.releaseYear} ● </p>
          <p>{movieUpdated && convertRuntime(selectedMovie.duration)}</p>
        </div>
        <article className="cast-article">
          <p>
            <span>Starring</span>: {movieUpdated && getCategoryDetails("")} ●{" "}
          </p>
          <p>
            <span>Director</span>: {movieUpdated && getDirector()}
          </p>
        </article>
      </article>
    </section>
  );
};

export default MoviePage;
