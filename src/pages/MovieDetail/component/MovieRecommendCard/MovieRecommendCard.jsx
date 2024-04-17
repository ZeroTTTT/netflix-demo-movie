import React from 'react'
import './MovieRecommendCard.style.css'
import { Badge } from 'react-bootstrap'
import {useMovieGenreQuery} from  "../../../../hooks/useMovieGenre"
import MovieTag from '../../../../common/MovieTag/MovieTag'

const MovieRecommendCard = ({item}) => {
  const {data:genre} = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if(!genre) return []
    const genreNameList = genreIdList.map((id) => {
        const genreObj = genre.find((genre) => genre.id ===id)
        return genreObj.name;
    })
    return genreNameList
}
  return (
    <div className="recommend-card-box" style={{
      backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${item?.backdrop_path})`,
    }}>
      <div className="recommend-card-detail">
         <div className="recommend-card-title-wrap">
            <h4 className="recommend-card-title">{item?.title}</h4>
            <div className="detail-bedge">
                    {showGenre(item.genre_ids).map((id, index) => 
                        <Badge bg ="danger" key={index}>{id}</Badge>
                    )}
            </div>
         </div>
         <MovieTag movie={item}/>
      </div>
    </div>
  )
}

export default MovieRecommendCard