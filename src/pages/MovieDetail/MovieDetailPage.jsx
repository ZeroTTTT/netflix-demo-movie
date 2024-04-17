import React from 'react'
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Spinner, Alert, Col, Row, Container, Button, Badge } from 'react-bootstrap';
import './MovieDetailPage.style.css'

// import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';


import MovieDetailInfo from './component/MovieDetailInfo/MovieDetailInfo';
import MovieDetailTabContent from './component/MovieDetailTabContent/MovieDetailTabContent';
import MovieCredit from './component/MovieCredit/MovieCredit';


const MovieDetailPage = () => {


  // const [query,setQuery] = useSearchParams();
  // const [page, setPage] = useState(1);
  // const keyword = query.get("q");
  // const {data,isLoading,isError,error} = useSearchMovieQuery({keyword, page});

  const {id} = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
          animation='border'
          variant='danger'
          style={{ width: '5rem', height: '5rem', margin: 'auto' }}
        />
      </div>
    );
  }
  if (isError) {
    return (
      <Alert variant='danger' className='alert-area'>
        Error: {error.message}
      </Alert>
    );
  }

return (
  // <Container>
  //   {console.log("ddd",data)}
  //   <h1>title : {data.title}</h1>
  //   {/* <h1>overview : {data.overview}</h1> */}
  //   <h1>runtime: {data.runtime}</h1>
  //   <h1>release_date: {data.release_date}</h1>
  // </Container>



  <div> 
    <div className="movieDetailBg" style={{
      backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path})`,
    }}>
  </div>

  <MovieDetailInfo movie={data} id={id}/>
  <MovieCredit id={id}/>
  <MovieDetailTabContent id={id}/>
  </div>

)
}

export default MovieDetailPage