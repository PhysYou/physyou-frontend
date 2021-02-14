import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3553ae',
    },
    secondary: {
      main: '#6394dd',
    },
    background: {
      default: '#efefef',
    },
    text: {
      primary: '#3553ae',
    },
  },
  typography: {
    fontFamily: 'Nunito, Roboto, "Helvetica Neue", Arial, sans-serif',
    textTransform: "lowercase",
    button: {
      textTransform: "lowercase"
    }
  },
});

export default theme;