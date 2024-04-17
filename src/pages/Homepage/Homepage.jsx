import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

//1.배너 =>  popular movie를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. top rated movie
//4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      {/* <hr /> */}
      <PopularMovieSlide />
      <hr />
      <TopRatedMovieSlide />
      <hr />
      <UpcomingMovieSlide />
    </div>
  )
}

export default Homepage