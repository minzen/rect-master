import React from 'react'
import { Grid } from '@material-ui/core'
import GridHidingItem from './GridHidingItem'

interface HidingGridProps {
  hiddenPartsOfImage: Array<boolean>
  width: number
  height: number
}

// The component forms the grid used to hide and step by step to reveal the underlying image
const HidingGrid = (props: HidingGridProps) => {
  return (
    <>
      <Grid container direction='row' spacing={0}>
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[0]}
        />
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[1]}
        />
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[2]}
        />
      </Grid>
      <Grid container direction='row' spacing={0}>
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[3]}
        />
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[4]}
        />
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[5]}
        />
      </Grid>
      <Grid container direction='row' spacing={0}>
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[6]}
        />
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[7]}
        />
        <GridHidingItem
          height={props.height}
          width={props.width}
          visible={props.hiddenPartsOfImage[8]}
        />
      </Grid>
    </>
  )
}
export default HidingGrid
