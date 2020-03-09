import React, { useState, useEffect } from 'react'
import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import ImageView from './ImageView'
import GameTimer from './GameTimer'
import GameLostNotice from './GameLostNotice'
import data from './data/data.json'
import AnswerButtons from './AnswerButtons'
import ScoreView from './ScoreView'
import {
  drawRandCountriesWithOneExcluded,
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
  const initiallyHidden: Array<boolean> = Array(9).fill(true)
  const initialHiddenIndices = Array.from(Array(9).keys())
  const [hiddenIndices, setHiddenIndices] = useState(initialHiddenIndices)
  const [timerValue, setTimerValue] = useState(TIMER_INIT)
  const [img, setImg] = useState('')
  const [imgShootingPlace, setImgShootingPlace] = useState('')
  const [itemAtIndexHidden, setItemAtIndexHidden] = useState(initiallyHidden)
  const [countryOptions, setCountryOptions] = useState(Array<string>())
  const [gameLost, setGameLost] = useState(false)
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
  const numberOfImages: number = data.length

  useEffect(() => {
    initQuiz()
  }, [])

  const initQuiz = () => {
    // Obtain a random image from the pool
    const imageIdx = Math.floor(Math.random() * numberOfImages)
    const imageName = data[imageIdx].name
    setImg(imageName)
    const imageShootingPlace = data[imageIdx].shootingplace
    setImgShootingPlace(imageShootingPlace)

    // Draw three random countries, and add the actual shooting place (correct answer)
    let drawnCountries = drawRandCountriesWithOneExcluded(
      DEFAULT_NUMBER_OF_FURTHER_ANSWER_OPTIONS, imageShootingPlace
    )
    drawnCountries.push(imageShootingPlace)
    // At the end, shuffle the array
    const shuffledCountries = shuffleArray(drawnCountries)
    setCountryOptions(shuffledCountries)
  }

  const checkGameEndStatus = () => {
    if (timerValue === 0 || gameLost) {
      return <GameLostNotice open={true} startNewGame={handleStartNewGame} />
    }
  }

  const handleSubmitAnswer = (value: any) => {
    const answer = value.country
    if (answer !== imgShootingPlace) {
      setGameLost(true)
      setTimerValue(0)
      setItemAtIndexHidden(initiallyHidden)
    } else if (answer === imgShootingPlace && timerValue > 0) {
      setTimerValue(0)
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
      handleNewGuessingRound()
    }
  }

  const handleStartNewGame = () => {
    setItemAtIndexHidden(initiallyHidden)
    setHiddenIndices(initialHiddenIndices)
    initQuiz()
    setTimerValue(TIMER_INIT)
    setGameLost(false)
    setNumberOfCorrectAnswers(0)
  }

  const handleNewGuessingRound = () => {
    setItemAtIndexHidden(initiallyHidden)
    setHiddenIndices(initialHiddenIndices)
    initQuiz()
    setTimerValue(TIMER_INIT + 1)
  }

  if (img && img !== '') {
    return (
      <Container maxWidth='md'>
        {checkGameEndStatus()}
        <Grid container justify='space-between'>
          <GameTimer
            setTimerValue={setTimerValue}
            timerValue={timerValue}
            hiddenPartsOfImage={itemAtIndexHidden}
            setHiddenPartsOfImage={setItemAtIndexHidden}
            hiddenIndices={hiddenIndices}
            setHiddenIndices={setHiddenIndices}
          />
          <ScoreView currentScore={numberOfCorrectAnswers} />
        </Grid>
        <ImageView
          image={img}
          imageShootingPlace={imgShootingPlace}
          hiddenPartsOfImage={itemAtIndexHidden}
        />
        <AnswerButtons
          gameLost={gameLost}
          countries={countryOptions}
          handleSubmit={handleSubmitAnswer}
        />
        <br />
        <Button
          variant='contained'
          onClick={handleStartNewGame}
          className={classes.button}
          color='secondary'
        >
          Start a new game
        </Button>
      </Container>
    )
  }
  return <></>
}
export default MainGameView
