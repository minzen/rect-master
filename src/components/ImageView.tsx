import React from 'react'
import { Box } from '@material-ui/core'
import HidingGrid from './HidingGrid'
import { makeStyles } from '@material-ui/core/styles'
import { Picture } from 'react-responsive-picture'
const images = require.context('../../images', true)
const smallImages = require.context('../../images/300', true)

interface ImageViewProps {
  image: string
  imageShootingPlace: string
  hiddenPartsOfImage: Array<boolean>
  height: number
  width: number
}

// The ImageView component takes care of showing the grid on top of the image and on the other hand the actual image underneath.
const ImageView = (props: ImageViewProps) => {
  const getSuitableImageForResolution = () => {
    let styleObj
    const mobileVariantSize = 300
    const defaultSize = 600
    const img_src = images(`./${props.image}`)
    const img_small_src = smallImages(`./${props.image}`)

    if (props.width < 600) {
      styleObj = {
        base: {
          width: mobileVariantSize,
          height: mobileVariantSize,
          backgroundImage: `url(${img_small_src})`
        }
      }
    } else {
      styleObj = {
        base: {
          width: defaultSize,
          height: defaultSize,
          backgroundImage: `url(${img_src})`
        }
      }
    }

    return makeStyles(styleObj)()
  }

  const classes = getSuitableImageForResolution()

  return (
    <>
      <Picture sources={[]} />
      <Box className={classes.base}>
        <HidingGrid height={props.height} width={props.width} hiddenPartsOfImage={props.hiddenPartsOfImage} />
      </Box>
    </>
  )
}
export default ImageView
