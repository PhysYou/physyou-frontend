import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Index from './pages/patient';
import Navbar from "./shared/navbar";
import Routes from './pages/routes'
import theme from './providers/theme';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
        <Routes />
    </ThemeProvider>
  );
}


export default App;
