interface FetchMoviesParams {
  page?: number;
}

export const fetchMovies = async ({ page }: FetchMoviesParams) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}`,
  );
  const { results } = await response.json();

  return results;
};
