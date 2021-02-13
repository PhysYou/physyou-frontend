import React from 'react';
import {motion} from 'framer-motion'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
        width: '100px',
        backgroundColor: "#D4D4D4",
        borderRadius: 5,
        marginBottom: '10px',
        transform: 'rotate(180deg)'
    },
    fillerStyles: {
        width: '100%',
        // width: `${completed}%`,
        background: 'linear-gradient(to top, #3553ae, #6394dd)',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    },
    labelStyles: {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '25px',
        transform: 'rotate(180deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
}))

const ProgressBar = (props) => {
    const { bgColor, current, max } = props;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <motion.div className={classes.fillerStyles} initial={{height: '5%'}} animate={{height: `${Math.max(5, (current/max) * 100)}%`}}>
                <div className={classes.labelStyles}>{current}</div>
            </motion.div>
        </div>
    );
};

export default ProgressBar;
