import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GAME_OVER, START_A_NEW_GAME } from '../utils/constants'
import theme from './Theme'

const useStyles = makeStyles({
  dialogTitle: {
    color: 'white',
    backgroundColor: theme.palette.primary.dark
  },
  dialog: {
    color: 'white',
    backgroundColor: '#696969'
  },
  dialogActions: {
    backgroundColor: '#696969'
  },
  linkInButton: {
    color: 'white',
    textDecoration: 'none'
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
        <DialogTitle
          id='game-over-dialog-title'
          className={classes.dialogTitle}
        >
          {START_A_NEW_GAME}
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText
            id='game-over-dialog-description'
            className={classes.dialog}
          >
            {GAME_OVER}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button color='secondary' variant='contained'>
            <Link to='/' className={classes.linkInButton}>
              No
            </Link>
          </Button>
          <Button onClick={handleOkClick} color='primary' variant='contained'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default GameLostNotice
