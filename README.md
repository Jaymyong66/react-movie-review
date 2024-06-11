# 🎯 레벨 2 돌아보기 - 영화 리뷰 미션 다시 하기

- 시간 제한 1시간, ver 0.0.1 : 인기 영화 목록 조회

### step 1. API postman으로 테스트해보기

- [x] 인기 영화 get 요청 보내보기 - https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1
- [x] search get 요청 보내보기 - https://api.themoviedb.org/3/search/movie?language=ko-KR&query=해리

### step 2. 인기 영화 get 요청 - useMovies 훅 만들고 테스트 코드 생성

- [x] useMovies.test.ts - 예상하는 동작에 대한 실패하는 테스트 명세 만들기
- [x] 해당 동작을 하는 useMovies 훅 만들기
- [x] 테스트 통과 시키기

### step 3. 컴포넌트에 렌더링

- [x] MovieList 컴포넌트 UI 제작
- [x] InfinityScroll 훅
- [x] useMovies 훅 붙여서 무한 스크롤 목록 완성
