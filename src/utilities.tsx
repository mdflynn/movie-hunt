export const importAll = (r: any) => {
  return r.keys().map(r);
};

export const findMovieThumbImage = (
  id: string,
  imageData: { default: string }[]
) => {
  return imageData.find((movie: any) => movie.default.includes(id));
};
