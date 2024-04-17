import React from 'react'
import imdb from '../../assets/images/imdb.png'
import { ReactComponent as LikeIcon } from "../../assets/images/like.svg";
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieTag.style.css'

const MovieTag = ({movie}) => {
  return (
    <div className="detail-tag-wrap">
        <div className="movie-vote"><img src={imdb} alt="imdb" />{movie.vote_average}</div>
        <div className="movie-popular"><LikeIcon/>{Math.floor(movie.popularity)}</div>
        {/* <div className="movie-popular"><FontAwesomeIcon icon={faUsers} className='me-1' />{movie.popularity}</div> */}
        <div className="movie-adult">
            {movie.adult ? <span className="adult_19">19</span> : <span className="adult_all bd-success">ALL</span>}
        </div>
    </div>
  )
}
export default MovieTag