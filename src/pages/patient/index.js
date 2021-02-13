import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from '../../shared/navbar';
import ExerciseList from '../../shared/exerciseList';

export default function PatientHome() {
    return (
        <>
            <Box display='flex' justifyContent="center" mt={5}>
                <ExerciseList />
            </Box>
        </>
    );
}
