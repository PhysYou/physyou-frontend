import React from 'react';
import { Avatar, Button, Typography, Paper, Box, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ExerciseDetails from '../../shared/exerciseDetails';

const useStyles = makeStyles((theme) => ({
    sideBar: {
        width: '22vw',
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.15)',
    },
    exerciseCard: {
        width: '70vw',
        height: '75vh',
        boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.15)',
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: 'auto',
        backgroundColor: theme.palette.secondary.main,
    },
    msgBtn: {
        textTransform: 'none',
        width: '160px',
        color: '#6ed3c4',
        border: '3px solid #6ed3c4',
        borderRadius: '10px',
    }
}));

export default function PatientDetails() {
    const classes = useStyles();

    const handleClose = () => {
        console.log('Close')
    }

    return (
        <>
        <Box display='flex' flexDirection='row'>
            <Paper className={classes.sideBar}>
                    <Box textAlign='center'>
                        <Box mb={2}>
                            <Avatar className={classes.avatar}></Avatar>
                        </Box>
                        <Typography variant='h6'>Dr. Perez, M.D</Typography>
                        <Typography variant='h7' color='secondary'>Since February 2021</Typography>
                        <Typography variant='body2'>Notes on diagnosis, plan</Typography>
                        <Box mt={8}>
                            <Button className={classes.msgBtn}>Message</Button>
                        </Box>
                    </Box>
                </Paper>
            <Box p={8}>
                    <Paper className={classes.exerciseCard}>
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
                        <Box display='flex' justifyContent='flex-end' mt={30}>
                            <Button className={classes.msgBtn}>Start</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    </>
    );
}
