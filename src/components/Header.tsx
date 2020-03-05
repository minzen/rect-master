import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    backgroundColor: '#8B8989',
    color: '#F0F8FF',
    padding: 10
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Typography variant='h3' className={classes.header}>
      In which country has the photo below been shot?
    </Typography>
  )
}
export default Header
