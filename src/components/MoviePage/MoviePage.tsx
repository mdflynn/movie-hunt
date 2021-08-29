import React, { useEffect, useState } from "react";
import "./MoviePage.css";

import { fetchMovies } from "../../apiCalls";
import { findMovieThumbImage, importAll } from "../../utilities";
import defaultImage from "../../assets/moviePosterImages/defaultImage.jpeg";

const movieBackgrounds = importAll(
  require.context("../../assets/movieHeroImages", false, /\.(png|jpe?g|svg)$/)
);

const MoviePage: React.FC<{ id: string }> = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState<any>({});

  useEffect(() => {
    fetchMovies(id).then((data) => setSelectedMovie(data.data));
  }, [id]);

  const getImage = findMovieThumbImage(id, movieBackgrounds);

  const movieImage = getImage === undefined ? defaultImage : getImage.default;

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
            <span className="cast-span">Starring</span>:{" "}
            {movieUpdated && getCategoryDetails("")} ●{" "}
          </p>
          <p>
            <span className="cast-span">Director</span>:{" "}
            {movieUpdated && getDirector()}
          </p>
        </article>
      </article>
    </section>
  );
};

export default MoviePage;
