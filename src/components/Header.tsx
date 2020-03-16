import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { WHICH_COUNTRY } from '../utils/constants'

const useStyles = makeStyles({
  header: {
    color: 'lightblue',
    marginTop: 15
  },
  topArea: {
    backgroundColor: '#141516',
    marginTop: 15
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.topArea}
    >
      <Grid item xs={12}>
        <Typography variant='h4' className={classes.header}>
          {WHICH_COUNTRY}
        </Typography>
      </Grid>
    </Grid>
  )
}
export default Header
