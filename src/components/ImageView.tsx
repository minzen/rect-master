import React from 'react'
import { Box } from '@material-ui/core'
import HidingGrid from './HidingGrid'
import { makeStyles } from '@material-ui/core/styles'
const images = require.context('../../images', true)

interface ImageViewProps {
  image: string
  imageShootingPlace: string
  timerValue: number
  underlyingItemAtIndexHidden: Array<boolean>
}

// The ImageView component takes care of showing the grid on top of the image and on the other hand the actual image underneath.
const ImageView = (props: ImageViewProps) => {
  const img_src = images(`./${props.image}`)
  const useStyles = makeStyles({
    base: {
      width: 600,
      height: 600,
      backgroundImage: `url(${img_src})`
    }
  })
  const classes = useStyles()

  return (
    <>
      <Box className={classes.base}>
        <HidingGrid
          underlyingItemAtIndexHidden={props.underlyingItemAtIndexHidden}
        />
      </Box>
    </>
  )
}
export default ImageView
