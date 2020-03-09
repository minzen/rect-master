import React from 'react'
import { Avatar, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  scoreItem: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 40,
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
  },

  scoreText: {
    color: 'white'
  }
})

interface ScoreViewProps {
  currentScore: number
}

const ScoreView = (props: ScoreViewProps) => {
  const classes = useStyles()

  return (
    <>
      <Grid item className={classes.scoreText}>
        Correct answers:{' '}
        <Avatar className={classes.scoreItem}>{props.currentScore}</Avatar>
      </Grid>
    </>
  )
}
export default ScoreView
