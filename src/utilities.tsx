// imports image files into component
export const importAll = (require: any) => {
  return require.keys().map(require);
};

export const findMovieThumbImage = (
  id: string,
  imageData: { default: string }[]
) => {
  return imageData.find((movie: any) => movie.default.includes(id));
};
