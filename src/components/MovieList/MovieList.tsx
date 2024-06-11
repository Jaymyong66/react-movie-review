import useMovies from '@/hooks/useMovies';
import starIcon from '@/assets/star_filled.png';
import { useInfinityScroll } from '@/hooks/useInfinityScroll';

const MovieList = () => {
  const { movies, isMoviesSuccess, fetchNextPage } = useMovies();
  const { lastProductElementRef } = useInfinityScroll({ onIntersect: fetchNextPage });

  return (
    <ul className="item-list">
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <div className="item-card">
              <img
                className="item-thumbnail"
                src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                loading="lazy"
                alt={movie.title}
              />
              <p className="item-title">{movie.title}</p>
              <p className="item-score">
                <img src={starIcon} alt="별점" />
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </li>
        );
      })}
      {movies.length !== 0 && isMoviesSuccess && (
        <li style={{ height: '10px' }} ref={lastProductElementRef}></li>
      )}
    </ul>
  );
};

export default MovieList;
