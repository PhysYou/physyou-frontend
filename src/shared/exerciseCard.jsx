import React from 'react';
import {
    Button,
    Typography,
    Paper,
    Box,
    makeStyles,
    fade,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ExerciseDetails from './exerciseDetails';

const useStyles = makeStyles((theme) => ({
    exerciseCard: {
        width: '70vw',
        height: '75vh',
        boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.15)',
    },
    startBtn: {
        textTransform: 'none',
        fontSize: '20px',
        width: '160px',
        backgroundColor: '#6ed3c4',
        color: '#ffffff',
        border: '3px solid #6ed3c4',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: fade('#6ed3c4', 0.7),
        },
    },
}));

function ExerciseCard() {
    const classes = useStyles();

    const handleClose = () => {
        console.log('Close');
    };

    return (
        <div>
            <Paper className={classes.exerciseCard}>
                <Box p={6}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant='h3'>Exercise Name</Typography>
                        <ClearIcon
                            onClick={handleClose}
                            fontSize='large'
                            style={{ fill: '#6ed3c4', cursor: 'pointer' }}
                        />
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <ExerciseDetails />
                    </Box>
                    <Box mt={3}>
                        <Typography variant='h6'>Exercise notes here</Typography>
                    </Box>
                    {/* TODO: The start button should be on bottom right regardless of screen-size */}
                    <Box display='flex' justifyContent='flex-end' mt={25}>
                        <Button className={classes.startBtn}>Start</Button>
                    </Box>
                </Box>
            </Paper>
        </div>
    )
}

export default ExerciseCard;
