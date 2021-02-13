import React from 'react';
import { Box, List, ListItem, ListItemText, fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const useStyles = makeStyles((theme) => ({
    listItem: {
        width: '70vw',
        height: '80px',
        background: '#f8f8f8',
        borderRadius: '5px',
        marginTop: '12px',
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
        <>
            <List>
                <ListItem className={classes.listItem} key='1'>
                    <Box mr={2}>
                        <FitnessCenterIcon style={{ fill: "#2DD6C2" }} />
                    </Box>
                    <ListItemText ml={4} primaryTypographyProps={{ style: lightText }}>COMPLETED</ListItemText>
                    <Box display='flex'>
                        <Box pl={5} mr={5}>
                            <ListItemText primaryTypographyProps={{ style: lightText }}>90% ACCURACY</ListItemText>
                        </Box>
                        <Box mr={5}>
                            <ListItemText primaryTypographyProps={{ style: darkText }}>24 reps</ListItemText>
                        </Box>
                        <Box mr={5}>
                            <ListItemText primaryTypographyProps={{ style: darkText }}>10 minutes</ListItemText>
                        </Box>
                        <Box>
                            <ListItemText primaryTypographyProps={{ style: darkText }}>Intesity: High</ListItemText>
                        </Box>
                    </Box>
                </ListItem>
            </List>
        </>

    );
}


export default ExerciseDetails;
