import React from 'react'
import { Grid } from '@material-ui/core'
import GridHidingItem from './GridHidingItem'

interface HidingGridProps {
  underlyingItemAtIndexHidden: Array<boolean>
}

// The component forms the grid used to hide and step by step to reveal the underlying image
const HidingGrid = (props: HidingGridProps) => {
  return (
    <>
      <Grid container direction='row' spacing={0}>
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[0]} />
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[1]} />
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[2]} />
      </Grid>
      <Grid container direction='row' spacing={0}>
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[3]} />
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[4]} />
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[5]} />
      </Grid>
      <Grid container direction='row' spacing={0}>
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[6]} />
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[7]} />
        <GridHidingItem visible={props.underlyingItemAtIndexHidden[8]} />
      </Grid>
    </>
  )
}
export default HidingGrid
