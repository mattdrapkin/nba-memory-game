import React from 'react'
import thumbsUp from '../images/thumbs-up.jpeg'

function GameOver() {
  return (
    <div className='game-over'>
    <h3>You won! Great job! Refresh to play again!</h3>
    <img src={thumbsUp} alt="Thumbs up" height="400px" width="700px" />
    </div>
  )
}

export default GameOver