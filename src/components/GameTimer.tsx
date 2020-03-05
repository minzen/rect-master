import React, { useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  timerView: {
    fontSize: 40,
    backgroundColor: '#4169E1',
    color: '#ffffff',
    width: 80,
    height: 80
  }
})

interface TimerProps {
  setTimerValue: Function
  timerValue: number
  setTimerRunning: Function
}

// The component timer takes care of revealing the image step by step according to the defined moments of time.
const GameTimer = (props: TimerProps) => {
  const classes = useStyles()
  const SEC_AS_MS = 1000

  const timerTick = () => {
    console.log('timerValue:', props.timerValue)
    props.setTimerValue(props.timerValue - 1)
  }

  useEffect(() => {
    props.setTimerRunning(true)
    props.timerValue > 0 && setTimeout(() => timerTick(), SEC_AS_MS)
  })

  return (
    <>
      <Avatar className={classes.timerView}>{props.timerValue}</Avatar>
    </>
  )
}
export default GameTimer
