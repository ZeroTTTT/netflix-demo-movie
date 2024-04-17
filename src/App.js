import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoudpage from './pages/NotFoundpage/NotFoundPage';
import Homepage from './pages/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

//홈페이지  /
//영화 전체보여주는 페이지 (서치) /movies
//영화 디테일 페이지  /movies/:id

//추천 영화 /movies/:id/recommandation
//리뷰 영화 /movies/:id/reviews              ===> /movies 를 쓰는게 많을때 라우트구성을 묶어줄수있다 ex path='movies'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} /> 

        <Route path='movies'>
          <Route index element= {<MoviePage />} />    {/*Route안에 Route를 SubRoute라고 부른다*/}
          <Route path=":id" element= {<MovieDetailPage />} />
        </Route>
      </Route>
      
      <Route path='*' element = {<NotFoudpage/>} />

    </Routes>
  );
}

export default App;
