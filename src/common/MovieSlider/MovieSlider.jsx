import React from 'react';
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title,movies,responsive}) => {
  return (
    <div className='title'>        
        <h3> {title}</h3>
        {movies && (
            <Carousel
                infinite={true}
                centerMode={true}        
                itemClass="movie-slider p-1"
                containerClass="carousel-container"            
                responsive={responsive}       
                keyBoardControl={true}
                emulateTouch={true}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                slidesToSlide={1}
                >

                {movies?.map((movie,index)=> <MovieCard movie={movie} key={index}/>)}
            </Carousel>
        )}
      </div>
  )
}

export default MovieSlider