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
}

const AnswerButtons = (props: AnswerButtonsProps) => {
  const classes = useStyles()

  return (<>
  {props.countries.map((country) => 
    <Button key={country} variant="contained" color="primary" onClick={() => props.handleSubmit({country})} className={classes.button}>{country}</Button>
  )}
  </>)
}
export default AnswerButtons
