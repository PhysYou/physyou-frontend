import React from 'react';
import { Box, List, ListItem, ListItemText, fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const useStyles = makeStyles((theme) => ({
    listItemCompleted: {
        width: '60vw',
        height: '80px',
        background: fade('#6084f2', 0.48),
        borderRadius: '5px',
    },

    listItemIncomplete: {
        width: '60vw',
        height: '80px',
        background: '#f8f8f8',
        borderRadius: '5px',
        marginTop: '12px',
    },

}));

const exerciseText = {
    fontWeight: 600,
    color: '#3553ae',
};

const accuracyText = {
    color: '#3553ae',
};

const timeText = {
    color: '#6084f2',
};

const incompleteText = {
    color: '#2DD6C2',
};



function ExerciseList() {
    const classes = useStyles();

    return (
        <>
            <List>
                <ListItem className={classes.listItemCompleted} key='1'>
                    <Box mr={2}>
                        <FitnessCenterIcon style={{ fill: "#6084f2" }} />
                    </Box>
                    <ListItemText ml={4} primaryTypographyProps={{ style: exerciseText }}>Ex 1</ListItemText>
                    <Box display='flex'>
                        <Box mr={5}>
                            <ListItemText primaryTypographyProps={{ style: accuracyText }}>90% Accuracy</ListItemText>
                        </Box>
                        <Box>
                            <ListItemText primaryTypographyProps={{ style: timeText }}>10 min</ListItemText>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem className={classes.listItemIncomplete} key='2'>
                    <Box mr={2}>
                        <FitnessCenterIcon style={{ fill: "#6084f2" }} />
                    </Box>
                    <ListItemText primaryTypographyProps={{ style: exerciseText }}>Ex 2</ListItemText>
                    <Box display='flex'>
                        <Box mr={5}>
                            <ListItemText primaryTypographyProps={{ style: incompleteText }}>Incomplete</ListItemText>
                        </Box>
                        <Box>
                            <ListItemText primaryTypographyProps={{ style: timeText }}>7 min</ListItemText>
                        </Box>
                    </Box>
                </ListItem>
            </List>
        </>

    );
}


export default ExerciseList;
