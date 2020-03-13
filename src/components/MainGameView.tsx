import React, { useState, useEffect } from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import ImageView from './ImageView'
import GameTimer from './GameTimer'
import GameLostNotice from './GameLostNotice'
import data from './data/data.json'
import AnswerButtons from './AnswerButtons'
import ScoreView from './ScoreView'
import InformationView from './InformationView'
import { drawRandCountriesWithOneExcluded, shuffleArray } from '../utils/utils'
import {
  TIMER_INIT,
  DEFAULT_NUMBER_OF_FURTHER_ANSWER_OPTIONS
} from '../utils/constants'

const useStyles = makeStyles({
  button: {
    margin: 5
  }
})

interface MainGameViewProps {
  show: boolean
  height: number
  width: number
}

const MainGameView = (props: MainGameViewProps) => {
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
    setItemAtIndexHidden(initiallyHidden)
    setHiddenIndices(initialHiddenIndices)
    // Obtain a random image from the pool
    const imageIdx = Math.floor(Math.random() * numberOfImages)
    const imageName = data[imageIdx].name
    setImg(imageName)
    const imageShootingPlace = data[imageIdx].shootingplace
    setImgShootingPlace(imageShootingPlace)

    // Draw three random countries, and add the actual shooting place (correct answer)
    let drawnCountries = drawRandCountriesWithOneExcluded(
      DEFAULT_NUMBER_OF_FURTHER_ANSWER_OPTIONS,
      imageShootingPlace
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
    initQuiz()
    setTimerValue(TIMER_INIT)
    setGameLost(false)
    setNumberOfCorrectAnswers(0)
  }

  const handleNewGuessingRound = () => {
    initQuiz()
    setTimerValue(TIMER_INIT + 1)
  }

  if (!props.show) {
    return null
  }

  if (img && img !== '') {
    return (
      <>
        {checkGameEndStatus()}
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={6}>
            <GameTimer
              setTimerValue={setTimerValue}
              timerValue={timerValue}
              hiddenPartsOfImage={itemAtIndexHidden}
              setHiddenPartsOfImage={setItemAtIndexHidden}
              hiddenIndices={hiddenIndices}
              setHiddenIndices={setHiddenIndices}
            />
          </Grid>
          <Grid item xs={6}>
            <ScoreView currentScore={numberOfCorrectAnswers} />
          </Grid>
        </Grid>

        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12}>
            <ImageView
              height={props.height}
              width={props.width}
              image={img}
              imageShootingPlace={imgShootingPlace}
              hiddenPartsOfImage={itemAtIndexHidden}
            />
          </Grid>
          <Grid item xs={12}>
            <AnswerButtons
              gameLost={gameLost}
              countries={countryOptions}
              handleSubmit={handleSubmitAnswer}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              onClick={handleStartNewGame}
              className={classes.button}
              color='secondary'
            >
              Start a new game
            </Button>
          </Grid>
        </Grid>
      </>
    )
  }
  return <></>
}
export default MainGameView
