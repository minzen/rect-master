import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface ItemProps {
  visible: boolean,
  width: number,
  height: number
}

// This component implements a single item on the grid. It is used to hide a part of the underlying photo.
const GridHidingItem = (props: ItemProps) => {
  const useStyles = () => {
    const defaultSize = 200
    const mobileSize = 100
    let styleObj

    if (props.width < 600) {
      styleObj = {
        item: {
          height: mobileSize,
          width: mobileSize
        },
        hidingItem: {
          height: mobileSize,
          width: mobileSize,
          backgroundColor: '#363636'
        }
      }  
    } else {
      styleObj = {
        item: {
          height: defaultSize,
          width: defaultSize
        },
        hidingItem: {
          height: defaultSize,
          width: defaultSize,
          backgroundColor: '#363636'
        }
      }  
    }


    return makeStyles(styleObj)()
  }

  const classes = useStyles()

  if (props.visible) {
    return <Grid item className={classes.hidingItem} />
  } else {
    return <Grid item className={classes.item} />
  }
}
export default GridHidingItem
