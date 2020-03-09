import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  item: {
    height: 200,
    width: 200
  },
  hidingItem: {
    height: 200,
    width: 200,
    backgroundColor: '#363636'
  }
})

interface ItemProps {
  visible: boolean
}

// This component implements a single item on the grid. It is used to hide a part of the underlying photo.
const GridHidingItem = (props: ItemProps) => {
  const classes = useStyles()

  if (props.visible) {
    return <Grid item className={classes.hidingItem} />
  } else {
    return <Grid item className={classes.item} />
  }
}
export default GridHidingItem
