import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  gameOver: {
    color: '#ff0000',
    backgroundColor: '#2F4F4F',
    fontSize: 46,
    padding: 15
  }
})

interface GameLostNoticeProps {
  open: boolean
}

// The class shows a notice about a lost game
const GameLostNotice = (props: GameLostNoticeProps) => {
  const classes = useStyles()
  const [notificationOpen, setNotificationOpen] = useState(props.open)
  const [anchorEl, setAnchorEl] = useState(null)
  const id = 'gameLostNotification'
  const GAME_OVER = 'Game Over!'

  const handleClose = () => {
    setNotificationOpen(false)
  }

  return (
    <div>
      <Popover
        id={id}
        open={notificationOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className={classes.gameOver}>{GAME_OVER} You lost!</Typography>
      </Popover>
    </div>
  )
}
export default GameLostNotice
