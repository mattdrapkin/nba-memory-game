import React from 'react'
import Card from './Card'

function CardDisplay({teams, shuffleTeams, updateScore}) {
    

  return (
    <div className='cards-container'>
        {teams.map(team => {
          return <Card key={team.id} name={team.name} image={team.img} id={team.id} shuffleTeams={shuffleTeams} updateScore={updateScore} />
        })}
    </div>
  )
}

export default CardDisplay