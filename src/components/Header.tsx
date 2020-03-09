import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    color: '#ffffff',
    padding: 10,
    backgroundColor: '#000000',
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.header}>
      <Typography variant='h4'>
        Which country?
      </Typography>
    </Paper>
  )
}
export default Header
