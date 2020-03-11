import React, {useState} from 'react'
import { Container, Grid, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import MainGameView from './components/MainGameView'
import InfoView from './components/InfoView'
import theme from './components/Theme'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#424242'
  }
})

const App = () => {
  const classes = useStyles()
  const [showGame, setShowGame] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <InfoView show={showGame === false} setShowGame={setShowGame} />
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.app}
        >
          <Grid item xs={12}>
            <Header show={showGame} />
          </Grid>
          <MainGameView show={showGame} />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
