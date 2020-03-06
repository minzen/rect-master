import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import MainGameView from './components/MainGameView'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#000000'
  }
})

const App = () => {
  const classes = useStyles()


    return (
      <div className={classes.app}>
        <Header />
        <MainGameView />
      </div>
    )
  }

export default App
