import React, { useState, useEffect } from 'react'
import { Button, Container, makeStyles } from '@material-ui/core'
import ImageView from './ImageView'
import GameTimer from './GameTimer'
import GameLostNotice from './GameLostNotice'
import GameWonNotice from './GameWonNotice'
import data from './data/data.json'
import AnswerButtons from './AnswerButtons'
import {
  drawRandCountry,
  drawRandCountries,
  shuffleArray
} from '../utils/utils'
import {
  TIMER_INIT,
  DEFAULT_NUMBER_OF_FURTHER_ANSWER_OPTIONS
} from '../utils/constants'

const useStyles = makeStyles({
  button: {
    margin: 5
  }
})

const MainGameView = () => {
  const classes = useStyles()
  const initiallyHidden: Array<boolean> = [true, true, true, true, true, true, true, true, true]
  const numberOfImages: number = data.length
  const [timerValue, setTimerValue] = useState(TIMER_INIT)
  const [img, setImg] = useState('')
  const [imgShootingPlace, setImgShootingPlace] = useState('')
  const [
    underlyingItemAtIndexHidden,
    setUnderlyingItemAtIndexHidden
  ] = useState(initiallyHidden)
  const [countryOptions, setCountryOptions] = useState(Array<string>())
  const [gameLost, setGameLost] = useState(false)
  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    initQuiz()
  }, [])

  const initQuiz = () => {
    // Obtain a random image from the pool
    const imageIdx = Math.floor(Math.random() * numberOfImages)
    console.log(imageIdx)
    const imageName = data[imageIdx].name
    console.log(imageName)
    setImg(imageName)
    const imageShootingPlace = data[imageIdx].shootingplace
    setImgShootingPlace(imageShootingPlace)

    // Draw three random countries, add the actual shooting place (correct answer), if it is not included.
    // If it is, draw a further country to always get the same number of options for the player to choose from.
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

  const checkGameEndStatus = () => {
    if (!gameWon && (timerValue === 0 || gameLost)) {
      return <GameLostNotice open={true} />
    } else if (timerValue > 0 && gameWon) {
      return <GameWonNotice open={true} />
    }
  }

  const handleSubmitAnswer = (value: any) => {
    const answer = value.country
    if (answer !== imgShootingPlace) {
      setGameLost(true)
    } else if (answer === imgShootingPlace && timerValue > 0) {
      setGameWon(true)
    }
  }

  const handleStartNewGame = () => {
    setUnderlyingItemAtIndexHidden(initiallyHidden)
    initQuiz()
    setTimerValue(TIMER_INIT)
    setGameLost(false)
    setGameWon(false)
  }

  if (img && img !== '' && countryOptions) {
    return (
      <Container maxWidth='xl'>
        {checkGameEndStatus()}
        <GameTimer
          setTimerValue={setTimerValue}
          timerValue={timerValue}
          hiddenPartsOfImage={underlyingItemAtIndexHidden}
          setHiddenPartsOfImage={setUnderlyingItemAtIndexHidden}          
        />
        <ImageView
          image={img}
          imageShootingPlace={imgShootingPlace}
          timerValue={timerValue}
          underlyingItemAtIndexHidden={underlyingItemAtIndexHidden}
        />
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
      </Container>
    )
  }
  return <></>
}
export default MainGameView
