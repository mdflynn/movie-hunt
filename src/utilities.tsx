export const findMovieThumbImage = (
  id: string,
  imageData: []
) => {
  return imageData.find((movie: any) => movie.includes(id));
};
