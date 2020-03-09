import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    margin: 5
  }
})

interface AnswerButtonsProps {
  countries: Array<string>
  handleSubmit: any
  gameLost: boolean
}

const AnswerButtons = (props: AnswerButtonsProps) => {
  const classes = useStyles()

  const shouldDisable = () => {
    if (props.gameLost) {
      return true
    }
    return false
  }

  return (
    <>
      {props.countries.map(country => (
        <Button
          key={country}
          variant='contained'
          color='primary'
          disabled={shouldDisable()}
          onClick={() => props.handleSubmit({ country })}
          className={classes.button}
        >
          {country}
        </Button>
      ))}
    </>
  )
}
export default AnswerButtons
