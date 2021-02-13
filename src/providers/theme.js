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
      primary: '#f8f8f8',
    },
  },
  typography: {
    fontFamily: 'Nunito, Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default theme;