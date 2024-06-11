import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react';

describe('useMovies 훅 테스트', () => {
  it('인기 있는 영화 목록의 1 페이지를 가져온다', async () => {
    const { result } = renderHook(() => useMovies());

    await waitFor(() => {
      expect(result.current.data).toHaveLength(20);
    });
  });

  it('인기 있는 영화 목록의 2 페이지를 가져온다', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.fetchNextPage();
    });

    waitFor(() => {
      expect(result.current.data).toHaveLength(40);
    });
  });
});
