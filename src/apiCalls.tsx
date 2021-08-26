interface Movie {
  data: {
    id: string;
    title: string;
    genres: string[];
  };
}

export const getAllMovies = async (): Promise<Movie> => {
  const response = await fetch(
    "https://code-challenge.spectrumtoolbox.com/api/movies",

    {
      headers: {
        authorization: "Api-Key q3MNxtfep8Gt",
      },
    }
  );

  return response.json();
};
