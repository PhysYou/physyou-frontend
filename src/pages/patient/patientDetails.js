import React from 'react';
import { Typography, Paper, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ExerciseDetails from '../../shared/exerciseDetails';

export default function PatientDetails() {
    return (
        <Paper style={{ width: '70vw', height: '45vh' }}>
            <Box p={6}>
            <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h3'>Exercise</Typography>
                    <ClearIcon fontSize='large' style={{ fill: '#6ed3c4'}} />
            </Box>
            <Box display='flex' justifyContent='center'>
                <ExerciseDetails />
            </Box>
            <Box mt={3}>
                <Typography variant='h6'>Exercise notes here</Typography>
            </Box>
            </Box>
        </Paper>
    );
}
