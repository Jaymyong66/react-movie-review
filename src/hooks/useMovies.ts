import { MovieType } from './../types/movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMovies } from '@/api';

const useMovies = () => {
  const { data, isError, isSuccess, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam }) => {
      return fetchMovies({ page: pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
  });

  const movies = (data?.pages.map((page) => page.results).flat() as MovieType[]) ?? [];

  return {
    movies,
    isMoviesError: isError,
    isMoviesSuccess: isSuccess,
    fetchNextPage,
  };
};

export default useMovies;
