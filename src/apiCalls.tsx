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

export const fetchMovies = async (id?: string): Promise<Movie | SingleMovie> => {
  const determineFetch = id ? `${url}/${id}` : url

  const response = await fetch(determineFetch, authorization);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
