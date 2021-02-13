import React from 'react';
import { Box } from '@material-ui/core';
import SideBar from '../../shared/sideBar';
import ExerciseCard from '../../shared/exerciseCard';

export default function PatientDetails() {
  return (
    <>
      <Box display='flex' flexDirection='row'>
        <SideBar />
        <Box p={8}>
          <ExerciseCard />
        </Box>
      </Box>
    </>
  );
}
