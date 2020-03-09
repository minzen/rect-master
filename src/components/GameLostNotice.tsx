import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { GAME_OVER } from '../utils/constants'

interface GameLostNoticeProps {
  open: boolean,
  startNewGame: any
}

// The class shows a notice about a lost game
const GameLostNotice = (props: GameLostNoticeProps) => {
  const [notificationOpen, setNotificationOpen] = useState(props.open)

  const handleClose = () => {
    setNotificationOpen(false)
  }

  const handleOkClick = () => {
    props.startNewGame()
    setNotificationOpen(false)
  }

  return (
    <div>
      <Dialog open={notificationOpen} onClose={handleClose} aria-labelledby="game-over-dialog-title" aria-describedby="game-over-dialog-description">
        <DialogTitle id="game-over-dialog-title">Start a new game?</DialogTitle>
        <DialogContent>
          <DialogContentText id="game-over-dialog-description">{GAME_OVER} You lose. Fortunately there always is a next game...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">No</Button>
          <Button onClick={handleOkClick} color="primary">Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default GameLostNotice
