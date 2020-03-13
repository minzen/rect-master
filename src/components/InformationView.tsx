import React from 'react'
import useWindowDimensions from '../utils/WindowDimensions'

const InformationView = () => {
  const { height, width } = useWindowDimensions()

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  )
}

export default InformationView
