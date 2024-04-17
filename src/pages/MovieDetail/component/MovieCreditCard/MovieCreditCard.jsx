import React from 'react'

const MovieCreditCard = ({item, characterOverride}) => {
  const character = characterOverride || item?.character;

  return (
    <div className="credit-box">
      <div className="credit-profile"><img src={`https://media.themoviedb.org/t/p/w276_and_h350_face${item?.profile_path}`} alt="profile"/></div>
      <div className="credit-content">
        <div className="credit-name">{item?.name}</div>
        <div className="credit-character">{character === "director" ? "Director" : character}</div>
      </div>
    </div>
  )
}

export default MovieCreditCard