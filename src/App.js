import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Index from './pages/patient';
import Navbar from "./shared/navbar";
import Routes from './pages/routes'
import theme from './providers/theme';
import { CssBaseline } from '@material-ui/core';
import PatientCamera from "./pages/patient/exercise-camera";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
        <PatientCamera/>
        {/*<Routes />*/}
    </ThemeProvider>
  );
}


export default App;
