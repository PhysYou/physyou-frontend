import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Index from './pages/patient';
import Navbar from "./shared/navbar";
import Routes from './pages/routes'
import theme from './providers/theme';
import { CssBaseline } from '@material-ui/core';
import PatientCamera from "./pages/patient/exercise-camera";
import DoctorHome from "./pages/doctor";
import MyPatientProfile from "./pages/doctor/mypatients";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
        {/*<MyPatientProfile/>*/}
        <Routes />
    </ThemeProvider>
  );
}


export default App;
