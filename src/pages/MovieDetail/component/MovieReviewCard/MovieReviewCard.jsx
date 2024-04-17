import React from 'react'
import { useState } from 'react';
import './MovieReviewCard.style.css'
const MovieReviewCard = ({item}) => {
    const [reviewMore, setReviewMore] = useState(false);

  return (
    <div>
        <h4 className="review-author">{item?.author}</h4>
        <p className={`review-content ${reviewMore ? 'open' : 'close'}`}>{item?.content}</p>
        <button className="review-btn"  onClick={() => setReviewMore(!reviewMore)}>
            {reviewMore ? 'close' : 'more'}
        </button>
    </div>
  )
}

export default MovieReviewCard