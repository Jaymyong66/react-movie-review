import { http, HttpResponse } from 'msw';
import movies from './movies.json';

export const handlers = [
  http.get('https://api.themoviedb.org/3/movie/popular', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page'));

    const startIndex = (page - 1) * 20;
    const endIndex = page * 20;

    const last = !movies.results[endIndex + 1];
    const formattedMovies = movies.results.slice(startIndex, endIndex);

    return HttpResponse.json({ page, last, results: [...formattedMovies] });
  }),
];
