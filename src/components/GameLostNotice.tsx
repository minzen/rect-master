import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GAME_OVER } from '../utils/constants'

const useStyles = makeStyles({
  dialogTitle: {
    color: 'gray',
    backgroundColor: '#363636'
  },
  dialog: {
    color: 'black',
    backgroundColor: '#696969'
  },
  dialogActions: {
    color: 'black',
    backgroundColor: '#696969'
  }
})

interface GameLostNoticeProps {
  open: boolean
  startNewGame: any
}

// The class shows a notice about a lost game
const GameLostNotice = (props: GameLostNoticeProps) => {
  const [notificationOpen, setNotificationOpen] = useState(props.open)
  const classes = useStyles()

  const handleClose = () => {
    setNotificationOpen(false)
  }

  const handleOkClick = () => {
    props.startNewGame()
    setNotificationOpen(false)
  }

  return (
    <div>
      <Dialog
        open={notificationOpen}
        onClose={handleClose}
        aria-labelledby='game-over-dialog-title'
        aria-describedby='game-over-dialog-description'
      >
        <DialogTitle id='game-over-dialog-title' className={classes.dialogTitle}>
          Start a new game?
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText
            id='game-over-dialog-description'
            className={classes.dialog}
          >
            {GAME_OVER} You lose. Fortunately there always is a next game...
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleClose} color='primary' variant='outlined'>
            No
          </Button>
          <Button onClick={handleOkClick} color='primary' variant='outlined'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default GameLostNotice
