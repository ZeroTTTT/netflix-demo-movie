import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
//  console.log("key", API_KEY);

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Accept: 'application/json',
        // Authorization: `Bearer ${API_KEY}`,
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTJiZjAyYzRhZGQ1MzY3ZmFmMjk4ZjYyMTBjYTVkZCIsInN1YiI6IjY2MTAyNjhhZjI4ODM4MDE3ZTBmYmQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wCS6L4AsaPuSuXFha4DZymk3qFD7Hiw-1rXxWdMBQjM'
      }
  });


//디버깅용으로 사용하면 됨
  // 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });

  export default api;