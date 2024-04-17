import React from 'react'
import './MovieDetailRecommend.style.css'
import MovieRecommendCard from '../MovieRecommendCard/MovieRecommendCard'
const MovieDetailRecommend = ({recommend}) => {
  return (
    <div className="detail-recommend-wrap">
        {recommend?.length === 0 ? (
          <div className="recommend-none">추천영화가 없습니다.</div>
        ) : (
          <ul className="recommend-list">
          {recommend?.map((item, index) => (
              <li key={index}>
                  <MovieRecommendCard item={item}/>
              </li>
          ))}
          </ul>
        )}
    </div>
  )
}

export default MovieDetailRecommend