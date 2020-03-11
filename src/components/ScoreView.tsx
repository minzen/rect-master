import React from 'react'
import { Avatar, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  scoreItem: {
    backgroundColor: 'lightblue',
    color: 'black',
    fontSize: 40,
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 10
  },

  scoreText: {
    color: 'lightblue',
  }
})

interface ScoreViewProps {
  currentScore: number
}

const ScoreView = (props: ScoreViewProps) => {
  const classes = useStyles()

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item xs={12}>
        <div className={classes.scoreText}>Correct answers: </div>
      </Grid>
      <Grid item xs={12}>
        <Avatar className={classes.scoreItem}>{props.currentScore}</Avatar>
      </Grid>
    </Grid>
  )
}
export default ScoreView
