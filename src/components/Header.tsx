import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    color: '#ffffff'
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Paper>
      <Typography variant='h4' className={classes.header}>
        Which country?
      </Typography>
    </Paper>
  )
}
export default Header
