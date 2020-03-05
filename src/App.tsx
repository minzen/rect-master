import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Header from './components/Header'
import ImageView from './components/ImageView'
import GameTimer from './components/GameTimer'
import GameLostNotice from './components/GameLostNotice'
import GameWonNotice from './components/GameWonNotice'
import data from './components/data/data.json'
import AnswerButtons from './components/AnswerButtons'
import RevealImageTimer from './components/RevealImageTimer'
import { drawRandCountry, drawRandCountries, shuffleArray } from './utils/utils'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#000000'
  },
  button: {
    margin: 5
  },
  test: {
    color: '#ffffff'
  }
})

const App = () => {
  const initiallyHidden: Array<boolean> = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]
  const TIMER_INIT: number = 21
  const DEFAULT_NUMBER_OF_FURTHER_ANSWER_OPTIONS: number = 2
  const numberOfImages: number = data.length
  const [timerValue, setTimerValue] = useState(TIMER_INIT)
  const [timerRunning, setTimerRunning] = useState(false)
  const [img, setImg] = useState('')
  const [imgShootingPlace, setImgShootingPlace] = useState('')
  const [
    underlyingItemAtIndexHidden,
    setUnderlyingItemAtIndexHidden
  ] = useState(initiallyHidden)
  const [countryOptions, setCountryOptions] = useState(Array<string>())
  const [gameLost, setGameLost] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const classes = useStyles()

  const checkGameLost = () => {
    if (timerValue === 0 || gameLost) {
      return <GameLostNotice open={true} />
    }
  }

  const checkGameWon = () => {
    if (timerValue > 0 && gameWon) {
      return <GameWonNotice open={true} />
    }
  }

  const handleSubmitAnswer = (value: any) => {
    const answer = value.country
    if (answer !== imgShootingPlace) {
      setGameLost(true)
      setTimerRunning(false)
    } else if (timerValue > 0) {
      setGameWon(true)
      setTimerRunning(false)
    }
  }

  const handleStartNewGame = () => {
    setUnderlyingItemAtIndexHidden(initiallyHidden)
    setImg('')
    setImgShootingPlace('')
    setTimerRunning(false)
    setTimerValue(TIMER_INIT)
    setGameLost(false)
    initGame()
  }

  const initGame = () => {
    // Obtain a random image from the pool
    const imageIdx = Math.floor(Math.random() * numberOfImages)
    const imageName = data[imageIdx].name
    const imageShootingPlace = data[imageIdx].shootingplace
    setImg(imageName)
    setImgShootingPlace(imageShootingPlace)

    // Draw three random countries, add the actual shooting place if it is not included.
    // If it is, draw a further country
    let drawnCountries = drawRandCountries(
      DEFAULT_NUMBER_OF_FURTHER_ANSWER_OPTIONS
    )
    if (!drawnCountries.includes(imageShootingPlace)) {
      drawnCountries.push(imageShootingPlace)
    } else {
      drawnCountries.push(drawRandCountry())
    }
    // At the end, shuffle the array
    const shuffledCountries = shuffleArray(drawnCountries)
    setCountryOptions(shuffledCountries)
  }

  useEffect(() => {
    initGame()
  }, [])

  if (img && img !== '') {
    return (
      <div className={classes.app}>
        <Header />
        {checkGameLost()}
        {checkGameWon()}
        <GameTimer
          setTimerValue={setTimerValue}
          timerValue={timerValue}
          setTimerRunning={setTimerRunning}
        />
        <RevealImageTimer
          timerValue={timerValue}
          timerRunning={timerRunning}
          underlyingItemAtIndexHidden={underlyingItemAtIndexHidden}
          setUnderlyingItemAtIndexHidden={setUnderlyingItemAtIndexHidden}
        />
        <ImageView
          image={img}
          imageShootingPlace={imgShootingPlace}
          timerValue={timerValue}
          underlyingItemAtIndexHidden={underlyingItemAtIndexHidden}
        />

        <div className={classes.test}>correct: {imgShootingPlace}</div>
        <AnswerButtons
          countries={countryOptions}
          handleSubmit={handleSubmitAnswer}
        />
        <br />
        <Button
          variant='contained'
          onClick={handleStartNewGame}
          className={classes.button}
        >
          Start a new game
        </Button>
      </div>
    )
  }

  return <></>
}

export default App
