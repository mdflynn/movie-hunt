export interface Movie {
  data: any;
  id: string;
  title: string;
  genres: string[];
}

export interface SingleMovie {
  data: any;
  id: string;
  title: string;
  description: string;
  duration: number;
  releaseDate: string;
  releaseYear: number;
  moods: [];
  topCast: {
    name: string;
    characterName: string;
  }[];
  genres: string[];
}

const url = "https://code-challenge.spectrumtoolbox.com/api/movies";

const authorization = {
  headers: {
    authorization: "Api-Key q3MNxtfep8Gt",
  },
};

export const getAllMovies = async (): Promise<Movie> => {
  const response = await fetch(url, authorization);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const getSingleMovie = async (id: string): Promise<SingleMovie> => {
  const response = await fetch(`${url}/${id}`, authorization);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
