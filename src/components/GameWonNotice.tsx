import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { GAME_WON } from '../utils/constants'

const useStyles = makeStyles({
  gameWon: {
    color: '#00C5CD',
    backgroundColor: '#2F4F4F',
    fontSize: 46,
    padding: 15
  }
})

interface GameWonNoticeProps {
  open: boolean
}

const GameWonNotice = (props: GameWonNoticeProps) => {
  const classes = useStyles()
  const [notificationOpen, setNotificationOpen] = useState(props.open)
  const [anchorEl, setAnchorEl] = useState(null)
  const id = 'gameWonNotification'

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
        <Typography className={classes.gameWon}>{GAME_WON}</Typography>
      </Popover>
    </div>
  )
}
export default GameWonNotice
