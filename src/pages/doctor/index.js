import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Avatar from "@material-ui/core/Avatar";

const useStyles2 = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: 'black'
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function CustomizedInputBase() {
    const classes = useStyles2();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Patient"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

function PatientCard() {
    const patient = {
        name: 'IAN PEREZ',
        startDate: 'since May 2019',
        notes: 'Notes'
    }
    return (
        <Paper style={{marginRight: 20, padding: '30px'}}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Avatar style={{height: '80px', width: '80px', marginBottom: '10px'}}/>
                <Typography variant='h5' color={'primary'} style={{marginBottom: '-5px'}}>{patient.name}</Typography>
                <Typography variant='body2' color={'secondary'}>{patient.startDate}</Typography>
                <Typography variant='body1' color={'primary'} style={{marginTop: '5px'}}>{patient.notes}</Typography>
            </Box>
        </Paper>
    )
}

export default function DoctorHome(){
    return (
        <Container>
            <Box display='flex' justifyContent='space-between' marginTop={2}>
                <Typography variant='h3' color='primary'>my patients</Typography>
                <CustomizedInputBase variant={'filled'} color={'inherit'}/>
            </Box>
            <Box display='flex' flexDirection='row' marginTop={2}>
                {
                    [1, 2, 3, 4, 5, 6].map(item => <PatientCard/>)
                }
            </Box>
        </Container>
    )
}
