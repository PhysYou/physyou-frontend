import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Index from './pages/patient';
import Navbar from "./shared/navbar";
import Routes from './pages/routes'
import theme from './providers/theme';
import { CssBaseline } from '@material-ui/core';
import PatientCamera from "./pages/patient/exercises/exercise-camera";
import DoctorHome from "./pages/doctor";
import MyPatientProfile from "./pages/doctor/mypatients";
import PatientHome from "./pages/patient";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
        {/*<PatientHome/>*/}
        <Routes />
    </ThemeProvider>
  );
}


export default App;
