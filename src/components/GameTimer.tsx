import React, { useEffect, useRef } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  GAMETIMER_TICK_MS,
  NUMBER_OF_TILES,
  TIMER_INIT
} from '../utils/constants'

const useStyles = makeStyles({
  timerView: {
    fontSize: 40,
    backgroundColor: '#2F4F4F',
    color: '#ffffff',
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 10
  }
})

interface TimerProps {
  setTimerValue: Function
  timerValue: number
  hiddenPartsOfImage: Array<boolean>
  setHiddenPartsOfImage: Function,
  hiddenIndices: Array<number>,
  setHiddenIndices: Function
}

// The component timer takes care of revealing the image step by step according to the defined moments of time.
const GameTimer = (props: TimerProps) => {
  const classes = useStyles()
  let numberOfHiddenItems = useRef<number>(NUMBER_OF_TILES)
  let timer = useRef<number>()

  const timerTick = () => {
    // Reveal a part of the image, if the timer value is an even one
    if (props.timerValue % 2 === 0) {
      removeHidingItem()
    }
    if (props.timerValue === 0) {
      clearTimeout(timer.current)
      return
    }
    props.setTimerValue(props.timerValue - 1)
  }

  // Obtain the index of the array that can be revealed
  const getIndexToReveal = (numberOfHiddenItems: number) => {
    return Math.floor(Math.random() * numberOfHiddenItems)
  }

  // Takes care of removing the items that hide the underlying photo one by one
  const removeHidingItem = () => {
    const idxToReveal = getIndexToReveal(numberOfHiddenItems.current)
    let items = props.hiddenIndices
    // Remove item at index
    items.splice(idxToReveal, 1)
    props.setHiddenIndices(items)
    numberOfHiddenItems.current = items.length

    // Mark the index as visible in the array that is used by the drawing method
    const changingVisibilityArr = props.hiddenPartsOfImage
    for (let i = 0; i < changingVisibilityArr.length; i++) {
      if (!items.includes(i)) {
        changingVisibilityArr[i] = false
      }
    }
    props.setHiddenPartsOfImage(changingVisibilityArr)
  }

  const stopTimer = () => {
    clearTimeout(timer.current)
  }

  const startTimer = () => {
    const t = window.setTimeout(() => timerTick(), GAMETIMER_TICK_MS)
    timer.current = t
  }

  useEffect(() => {
    startTimer()
  })

  if (props.timerValue === TIMER_INIT + 1) {
    stopTimer()
  }

  return <Avatar className={classes.timerView}>{props.timerValue}</Avatar>
}
export default GameTimer
