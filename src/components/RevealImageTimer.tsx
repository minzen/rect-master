import React from 'react'

interface RevealImageTimerProps {
  timerValue: number
  timerRunning: boolean
  underlyingItemAtIndexHidden: Array<boolean>
  setUnderlyingItemAtIndexHidden: Function
}

const RevealImageTimer = (props: RevealImageTimerProps) => {
  const NUMBER_OF_TILES = 9
  const revealTimes = [20, 18, 16, 14, 12, 10, 8, 6, 4]

  const getIndexToReveal = () => {
    let idx = Math.floor(Math.random() * NUMBER_OF_TILES)
    while (!isHidingItemVisible(idx)) {
      idx = Math.floor(Math.random() * NUMBER_OF_TILES)
    }
    return idx
  }

  const isHidingItemVisible = (index: number) => {
    if (props.underlyingItemAtIndexHidden[index]) {
      return true
    }
    return false
  }

  if (revealTimes.includes(props.timerValue)) {
    const itemIndexToReveal = getIndexToReveal()
    console.log('itemIndexToReveal', itemIndexToReveal, 'at', props.timerValue)
    const items = props.underlyingItemAtIndexHidden
    items[itemIndexToReveal] = false
    props.setUnderlyingItemAtIndexHidden(items)
  }

  return <></>
}
export default RevealImageTimer
