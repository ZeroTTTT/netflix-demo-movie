import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import './Banner.style.css';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import {
	Col,
	Row,
	Container,
	Badge,
	Alert,
	Spinner,
	Button,
} from 'react-bootstrap';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Banner = () => {
	const { data, isLoading, isError, error } = usePopularMoviesQuery();

	const bannerMovie = data?.results[0];

    const {data:genreData} = useMovieGenreQuery();  

    const showGenre=(genreIdist)=>{
        if(!genreData) return []  //장르데이터 없으면 숫자만 보여주느니 차라리 보여주지말자
        const genreNameList = genreIdist?.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        });
        return genreNameList
      }


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
		<div className='banner-full-div'>
			<Container
				fluid
				style={{
					backgroundImage:
						'url(' +
						`https://www.themoviedb.org/t/p/original${bannerMovie?.backdrop_path}` +
						')',
				}}
				className='banner-backdrop'>


				<Row className='banner-movie-info'>
					<Col sm>
						<h1 className='banner-movie-title'>{bannerMovie?.title}</h1>
						<hr />
						<Row sm>
							<p className='banner-movie-overview'>{bannerMovie?.overview}</p>
						</Row>
						<Row sm>
							{/* <div className='banner-movie-genres'>
								{genreNames?.map((id) => {
									return (
										<Badge bg='danger' key={id} className='genre-badge'>
											{id}
										</Badge>
									);
								})}
							</div> */}

                            {/* <div>
                                {showGenre(bannerMovie?.genre_ids)?.map((id)=> (
                                <Badge bg="danger">{id}</Badge> 
                                ))}
                            </div> */}
							
							<div className='banner-movie-genres'>
								{showGenre(bannerMovie?.genre_ids)?.map((id) => {
									return (
										<Badge bg='danger' key={id} className='genre-badge'>
											{id}
										</Badge>
									);
								})}
							</div>



						</Row>
						<br />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Banner;






// const Banner = () => {
//      const {data, isLoading, isError, error} = usePopularMoviesQuery();

//     if(isLoading){
//         <h1>Loading...</h1>
//     }

//     if (isError){
//         <Alert variant="danger">
//          {error.message}
//         </Alert>
//     }

//     return (

//         <div style={{  backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}` + ")"}}
//          className='banner'
//         >
//             <div className='text-white banner-text-area'>
//                 <h1>{data?.results[0].title}</h1>
//                 <p>{data?.results[0].overview}</p>
//             </div>      
//         </div>
//     )
// }

// export default Banner