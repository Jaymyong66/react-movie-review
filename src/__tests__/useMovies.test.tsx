import useMovies from '@/hooks/useMovies';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useMovies 훅 테스트', () => {
  it('인기 있는 영화 목록의 1 페이지를 가져온다', async () => {
    const { result } = renderHook(() => useMovies(), { wrapper });

    await waitFor(() => {
      expect(result.current.isMoviesSuccess).toBe(true);
      expect(result.current.movies).toHaveLength(20);
    });
  });

  it('인기 있는 영화 목록의 2 페이지를 가져온다', () => {
    const { result } = renderHook(() => useMovies(), { wrapper });

    act(() => {
      result.current.fetchNextPage();
    });

    waitFor(() => {
      expect(result.current.isMoviesSuccess).toBe(true);
      expect(result.current.movies).toHaveLength(40);
    });
  });
});
