import React, {Component} from 'react';
import {Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class AddExerciseModal extends Component {
    render() {
        return null;
    }
}

export default function MyPatientProfile(){
    const patient = {
        name: 'IAN PEREZ',
        startDate: 'since May 2019',
        notes: 'Notes on diagnosis, treatment, physical therapy plan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }
    return (
        <div>
            <Paper style={{height: 'calc(100vh - 64px)', width: '300px'}}>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' height={'100%'} p={3}>
                    <Avatar style={{height: '100px', width: '100px', marginBottom: '20px'}}/>
                    <Typography variant='h5' color={'primary'} style={{marginBottom: '-5px'}}>{patient.name}</Typography>
                    <Typography variant='body2' color={'secondary'}>{patient.startDate}</Typography>
                    <Typography variant='body1' color={'primary'} style={{marginTop: '10px', textAlign: 'center', marginBottom: '20px'}}>{patient.notes}</Typography>
                    <Button size={'large'} variant={'outlined'} color={'secondary'}>Message</Button>
                </Box>
            </Paper>

        </div>
    )
}
