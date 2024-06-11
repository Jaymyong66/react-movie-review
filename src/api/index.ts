interface FetchMoviesParams {
  page?: number;
}

const GET_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
};

export const fetchMovies = async ({ page }: FetchMoviesParams) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}`,
    GET_OPTIONS,
  );
  const data = await response.json();

  return data;
};
