import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Grid, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import MainGameView from './components/MainGameView'
import InfoView from './components/InfoView'
import theme from './components/Theme'
import useWindowDimensions from './utils/WindowDimensions'

const useStyles = makeStyles({
  app: {
    backgroundColor: 'black'
  }
})

const App = () => {
  const classes = useStyles()
  const { height, width } = useWindowDimensions()

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth='xl'>
          <Switch>
            <Route exact path='/'>
              <InfoView />
            </Route>
            <Route path='/game'>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                className={classes.app}
              >
                <Header />
                <MainGameView width={width} height={height} />
              </Grid>
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
