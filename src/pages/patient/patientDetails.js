import React from 'react';
import { Avatar, Button, Typography, Paper, Box, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ExerciseDetails from '../../shared/exerciseDetails';

const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        width: '22vw',
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: 'auto',
        backgroundColor: theme.palette.secondary.main,
    },
}));


export default function PatientDetails() {
    const classes = useStyles();

    const handleClose = () => {
        console.log('Close')
    }

    return (
        <>
        <Paper className={classes.paper}>
                <Box textAlign='center'>
                    <Box mb={2}>
                        <Avatar className={classes.avatar}></Avatar>
                    </Box>
                    <Typography variant='h6'>Dr. Perez, M.D</Typography>
                    <Typography variant='h7' color='secondary'>Since February 2021</Typography>
                    <Typography variant='body2'>Notes on diagnosis, plan</Typography>
                    <Box mt={8}>
                        <Button>Message</Button>
                    </Box>
                </Box>

             
        </Paper>

        {/* <Paper style={{ width: '70vw', height: '45vh' }}>
            <Box p={6}>
            <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h3'>Exercise Name</Typography>
                    <ClearIcon onClick={handleClose} fontSize='large' style={{ fill: '#6ed3c4', cursor: 'pointer'}} />
            </Box>
            <Box display='flex' justifyContent='center'>
                <ExerciseDetails />
            </Box>
            <Box mt={3}>
                <Typography variant='h6'>Exercise notes here</Typography>
            </Box>
            </Box>
            </Paper> */}
        </>
    );
}
