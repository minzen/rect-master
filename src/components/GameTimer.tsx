import React, { useEffect, useRef, useState } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  GAMETIMER_TICK_MS,
  NUMBER_OF_TILES
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
  setHiddenPartsOfImage: Function
}

// The component timer takes care of revealing the image step by step according to the defined moments of time.
const GameTimer = (props: TimerProps) => {
  const classes = useStyles()
  const [itemsHidden, setItemsHidden] = useState(Array.from(Array(9).keys()))
  let numberOfHiddenItems = useRef<number>(NUMBER_OF_TILES)
  let timer = useRef<number>()

  const timerTick = () => {
    console.log('timerValue:', props.timerValue)
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
    let idx = Math.floor(Math.random() * numberOfHiddenItems)
    console.log('revealing item at index', idx)
    return idx
  }

  // Takes care of removing the items that hide the underlying photo one by one
  const removeHidingItem = () => {
    console.log('removeHidingItem', new Date())
    console.log('numberOfHiddenItems:', numberOfHiddenItems)

    const idxToReveal = getIndexToReveal(numberOfHiddenItems.current)
    console.log('Removing item at index', idxToReveal)
    let items = itemsHidden
    // console.log('itemAtIdxHiddenArray:', items)
    // console.log('array size:', items.length)
    const removedItem = items.splice(idxToReveal, 1)
    console.log('removedItem:', removedItem)
    setItemsHidden(items)
    console.log('array size:', items.length)
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

  return <Avatar className={classes.timerView}>{props.timerValue}</Avatar>
}
export default GameTimer
