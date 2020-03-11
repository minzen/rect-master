import React from 'react'
import { Button, Grid } from '@material-ui/core'
import Logo from '../assets/img/logo.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  infoText: {
    color: 'white',
    marginBottom: 20
  }
})

interface InfoViewProps {
  show: boolean
  setShowGame: Function
}

const InfoView = (props: InfoViewProps) => {
  const classes = useStyles()

  if (!props.show) {
    return null
  }

  const handleStartGameClick = () => {
    props.setShowGame(true)
  }

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item xs={12}>
        <img src={Logo} alt='logo' />
      </Grid>
      <Grid item xs={12} className={classes.infoText}>
        The objective of the game is to guess / know which country the shown
        photo depicts. Each photo is revealed gradually and there are three
        options to choose from. A wrong guess or if the player runs out of time, leads to
        a game over.
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleStartGameClick} variant='contained'>
          Start Game
        </Button>
      </Grid>
    </Grid>
  )
}
export default InfoView
