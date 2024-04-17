import React from 'react'

import {useMovieCreditQuery} from"../../../../hooks/useMovieCredit"

import MovieCreditCard from '../MovieCreditCard/MovieCreditCard'
import './MovieCredit.style.css'
const MovieCredit = ({id}) => {
    const {data:credit} = useMovieCreditQuery({id})
    const creditCast = credit?.cast.slice(0, 10);
    const crewCast = credit?.crew;
    const crewCastDirecting = crewCast?.filter(direct => direct.job === "Director");
    return (
    <div className="movie-credit-wrap">
        <div className="credit-title">Director &amp; Top Billed Cast</div>
        <div className="credit-sub-title">Director</div>
        <ul className="credit-directing-list">
            {crewCastDirecting && crewCastDirecting.map((item, index) => (
                <li key={index}><MovieCreditCard item={item} characterOverride="director"/></li>
            ))}
        </ul>
        <div className="credit-sub-title">Character</div>
        <ul className="credit-character-list">
            {creditCast && creditCast.map((item, index) => (
                <li key={index}><MovieCreditCard item={item}/></li>
            ))}
        </ul>
    </div>
  )
}

export default MovieCredit