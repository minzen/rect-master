import React from 'react'
import { Container } from '@material-ui/core'
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
      <Container className={classes.app} maxWidth="md">
        <Header />
        <MainGameView />
      </Container>
    )
  }

export default App
