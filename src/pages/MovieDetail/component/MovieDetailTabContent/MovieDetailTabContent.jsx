import React from 'react'
import './MovieDetailTabContent.style.css'
// import {useMovieReviewQuery} from '../../../../hook/useMovieReview'

import {useMovieReviewQuery} from "../../../../hooks/useMovieReview"

import {useMovieRecommendQuery} from "../../../../hooks/useMovieRecommend"

import MovieDetailReview from '../MovieDetailReview/MovieDetailReview'
import MovieDetailRelated from '../MovieDetailRecommend/MovieDetailRecommend'
import { useState, useEffect, useRef } from 'react'

const MovieDetailTabContent = ({id}) => {
    
    const reviewButtonRef = useRef(null);
    const recommendButtonRef = useRef(null);
    const {data:review} = useMovieReviewQuery({id});
    const {data:recommend} = useMovieRecommendQuery({id});
    const [selectedTab, setSelectedTab] = useState('reviewCon');
    const [lineStyle, setLineStyle] = useState({});

    const getButtonClass = (tabName) => {
        return `tab-button ${selectedTab === tabName ? "active" : ""}`;
    };
    
    useEffect(() => {
        const updateLineStyle = () => {
            const currentRef = selectedTab === 'reviewCon' ? reviewButtonRef.current : recommendButtonRef.current;
            const width = currentRef.offsetWidth;
            const left = currentRef.offsetLeft;
            setLineStyle({ width: `${width}px`, left: `${left}px` });
        };
        updateLineStyle();
        window.addEventListener('resize', updateLineStyle);
        return () => window.removeEventListener('resize', updateLineStyle);
    }, [selectedTab]);

  return (
    <div className="movie-detail-tab-wrap">
        <div className="movie-detail-tab-list">
            <button ref={reviewButtonRef} className={getButtonClass('reviewCon')} onClick={() => setSelectedTab('reviewCon')}>Review <span>({review?.length})</span></button>
            <button ref={recommendButtonRef} className={getButtonClass('recommendCon')} onClick={() => setSelectedTab('recommendCon')}>Related Movies <span>({recommend?.length})</span></button>
            <div className="tab-line"  style={lineStyle}></div>
        </div>
        {selectedTab === 'reviewCon' && <MovieDetailReview review={review}/>}
        {selectedTab === 'recommendCon' && <MovieDetailRelated recommend={recommend}/>}
    </div>
  )
}

export default MovieDetailTabContent