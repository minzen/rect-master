import { createMuiTheme } from '@material-ui/core/styles'
import blueGray from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    backgroundColor: 'black',
    primary: {
      light: blueGray[300],
      main: blueGray[500],
      dark: blueGray[700]
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700]
    }
  },
})

export default theme