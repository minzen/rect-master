import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    color: '#000000',
    padding: 10,
    backgroundColor: '#2F4F4F',
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
