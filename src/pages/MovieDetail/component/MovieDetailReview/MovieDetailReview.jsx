import React from 'react'
import MovieReviewCard from '../MovieReviewCard/MovieReviewCard';
import './MovieDetailReview.style.css'
const MovieDetailReview = ({review}) => {
  return (
    <div className="detail-review-wrap">
        {review?.length === 0 ? (
            <div className="review-none">리뷰가 없습니다.</div>
        ) : (
        <ul className="review-list">
            {review?.map((item, index) => (
                <li key={index}>
                    <MovieReviewCard item={item}/>
                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default MovieDetailReview