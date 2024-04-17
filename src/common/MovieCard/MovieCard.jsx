import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LikeIcon } from "../../assets/images/like.svg";
import imdb from '../../assets/images/imdb.png'
import MovieTag from "../MovieTag/MovieTag"


const MovieCard = ({movie}) => {


  const {data:genreData} = useMovieGenreQuery();  
  const navigate = useNavigate();

  const showGenre=(genreIdist)=>{
    if(!genreData) return []  //장르데이터 없으면 숫자만 보여주느니 차라리 보여주지말자
    const genreNameList = genreIdist?.map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj.name;
    });
    return genreNameList
  }

  const goMovieDetails = () => {
    navigate(`/movies/${movie.id}`);
};

// const searchByKeyword=(event)=>{
//     event.preventDefault() //refresh를 막는다
//     //위에 url을 바꿔주기
//     //url로 넘겨주면 좋은점 새로고침했을때 그대로 넘겨준게 새로고침된다.
//     navigate(`/movies?q=${keyword}`)
//     setKeyword("");
//   }

  return (
    <div 
        style={{  
            backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"}}
        className='movie-card' 
        onClick={goMovieDetails}
    >
        <div className='overlay'>
            <h1>{movie.title}</h1>

  
            <div className="badge-wrap">
                {showGenre(movie.genre_ids)?.map((id)=> (
                <Badge className="badge" bg="danger">{id}</Badge> 
            ))}
            </div>

            {/* <div> */}
                {/* <div className='movie-card-font'><FontAwesomeIcon icon={faImdb} className='me-1' />{movie.vote_average}</div> */}
                {/* <div className="movie-vote"><img src={imdb} alt="imdb" />{movie.vote_average}</div> */}
                {/* <div className='movie-card-font'><FontAwesomeIcon icon={faUsers} className='me-1' />{Math.floor(movie.popularity)}</div> */}
                {/* <div className='movie-popular'><LikeIcon/>{Math.floor(movie.popularity)}</div> */}
                {/* <div className='movie-card-font'>{movie.adult? <div className='bg-danger rounded-circle adult-style'>18</div> : <div className='bg-warning rounded-circle text-black adult-style'>all</div>}</div> */}
                {/* <div className="movie-adult"> */}
                  {/* {movie.adult ? <span className="adult_19">19</span> : <span className="adult_all bd-success">ALL</span>} */}
                {/* </div> */}
            {/* </div> */}
            <MovieTag movie={movie}/>
            {/* <MovieTag className="MovieTag" movie={movie}/> */}
        </div>
    </div>
  )
}





export default MovieCard