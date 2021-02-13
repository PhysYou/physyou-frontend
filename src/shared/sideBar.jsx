import React from 'react';
import {
    Avatar,
    Button,
    Typography,
    Paper,
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sideBar: {
        width: '22vw',
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: '20px',
        width: '160px',
        color: '#6ed3c4',
        border: '3px solid #6ed3c4',
        borderRadius: '10px',
    },
}));

function SideBar() {
    const classes = useStyles();

    return (
        <Paper className={classes.sideBar}>
            <Box textAlign='center'>
                <Box mb={2}>
                    <Avatar className={classes.avatar}></Avatar>
                </Box>
                <Typography variant='h6'>Dr. Perez, M.D</Typography>
                <Typography variant='h7' color='secondary'>
                    Since February 2021
            </Typography>
                <Typography variant='body2'>Notes on diagnosis, plan</Typography>
                <Box mt={8}>
                    <Button className={classes.msgBtn}>Message</Button>
                </Box>
            </Box>
        </Paper>
    )
}

export default SideBar;