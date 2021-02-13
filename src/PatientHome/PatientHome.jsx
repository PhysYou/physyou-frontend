import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from '../shared/navbar';
import ExerciseList from '../shared/exerciseList';

function PatientHome() {
    return (
        <>
            <Navbar />
            <Box display='flex' justifyContent="center" mt={5}>
                <ExerciseList />
            </Box>
        </>
    );
}


export default PatientHome;
