import React from 'react'

function Card({name, image, id, shuffleTeams, updateScore}) {
  return (
    <div className='card-container' onClick={() => updateScore(id)}>
        <img className='logo' src={image} alt={name} />
        <div className='team-name'>{name}</div>
    </div>
  )
}

export default Card