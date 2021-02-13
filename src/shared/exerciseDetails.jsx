import React from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const useStyles = makeStyles(() => ({
    listItem: {
        width: '60vw',
        height: '80px',
        background: '#f8f8f8',
        borderRadius: '5px',
        marginTop: '12px',
        display: 'flex',
        textAlign: 'center',
    },
}));

const darkText = {
    fontWeight: 500,
    color: '#6394dd',
};

const lightText = {
    fontWeight: 500,
    color: '#2DD6C2',
};



function ExerciseDetails() {
    const classes = useStyles();

    return (
        <List >
            <ListItem className={classes.listItem} key='1'>
                <Box display='flex'>
                    <FitnessCenterIcon style={{ fill: "#2DD6C2", marginRight: '16px' }} />
                    <ListItemText primaryTypographyProps={{ style: lightText }}>COMPLETED</ListItemText>
                </Box>
                <ListItemText primaryTypographyProps={{ style: lightText }}>90% ACCURACY</ListItemText>
                <ListItemText primaryTypographyProps={{ style: darkText }}>24 reps</ListItemText>
                <ListItemText primaryTypographyProps={{ style: darkText }}>10 minutes</ListItemText>
                <ListItemText primaryTypographyProps={{ style: darkText }}>Intesity: High</ListItemText>
            </ListItem>
        </List>
    );
}


export default ExerciseDetails;
