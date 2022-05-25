import Header from "./components/Header"
import CardDisplay from "./components/CardDisplay"
import GameOver from "./components/GameOver"
import nbaLogo from './images/nba-logo.png'
import bullsImg from './images/bulls.png'
import cavsImg from './images/cavs.png'
import celticsImg from './images/celtics.png'
import hawksImg from './images/hawks.png'
import heatImg from './images/heat.png'
import hornetsImg from './images/hornets.png'
import knicksImg from './images/knicks.png'
import lakersImg from './images/lakers.png'
import magicImg from './images/magic.png'
import mavsImg from './images/mavs.png'
import sixersImg from './images/sixers.png'
import sunsImg from './images/suns.png'
import React, {useState, useEffect} from 'react'
import {v4 as uuid} from 'uuid'

function App() {

  const [teams, setTeams] = useState([
    {
        name: "Bulls",
        img: bullsImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Cavs",
        img: cavsImg,
        id: uuid(),
        selected: false,
    },
    {
        name: "Celtics",
        img: celticsImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Hawks",
        img: hawksImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Heat",
        img: heatImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Hornets",
        img: hornetsImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Knicks",
        img: knicksImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Lakers",
        img: lakersImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Magic",
        img: magicImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Mavs",
        img: mavsImg,
        id: uuid(),
        selected: false
    },
    {
        name: "Sixers",
        img: sixersImg,
        id: uuid(),
        selected: false
    },
    {
      name: "Suns",
      img: sunsImg,
      id: uuid(),
        selected: false
    }
])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const copy = teams
    for (let i = 0; i < copy.length; i++) {
      const rand = Math.floor(Math.random() * copy.length)
      const temp = copy[i]
      copy[i] = copy[rand]
      copy[rand] = temp
    }
    setTeams(copy)
    if (score === teams.length) setGameOver(true)
    if (score > highScore) setHighScore(prev => prev + 1)
  }, [score])

  function updateScore(id) {
    teams.map(team => {
      if (team.id === id) {
        if (team.selected) {
          setScore(0)
          setTeams(oldTeams => oldTeams.map(team => {
            return {...team, selected: false}
          }))
        }
        else {
          setTeams(oldTeams => oldTeams.map(team => {
            return team.id === id ? {...team, selected: true}
            : team
        }))
          setScore(prev => prev + 1)
        }
      }
    })
  }


  return (
    <div className="App">
      <Header logo={nbaLogo} score={score} highScore={highScore} />
      {gameOver ? <GameOver /> : 
      <CardDisplay teams={teams} updateScore={updateScore}  />}
    </div>
  );
}

export default App;
