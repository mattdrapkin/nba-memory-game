import React from 'react'

function Header({logo, score, highScore}) {
  return (
    <header className='header'>
    <div className='header-wrapper'>
    <img src={logo} alt="NBA logo" width="60px" height="auto" />
        <div className='intro-text'>
            <h1 className='title'>NBA Logo's Game</h1>
            <p className='description'>Don't select the same logo twice!</p>
        </div>
        </div>
        <div className='scoreboard'>
            <div>Score: {score}</div>
            <div>High score: {highScore}</div>
        </div>
    </header>
  )
}

export default Header