import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navbar: {
        background: 'linear-gradient(to right, #3553ae, #6394dd)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logoWrapper: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const user = useContext(UserContext);
    const history = useHistory();

    const handleLog = async () => {
        if (user) {
            await auth.signOut();
        }
        console.log("HERE")
        history.push('/login');
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    <Box className={classes.logoWrapper}>
                        <Logo style={{ height: 30, width: 150, }} />
                    </Box>
                    <Button color="inherit" size="large">Exercises</Button>
                    <Button color="inherit" size="large">Messages</Button>
                    <Button color="inherit" size="large" onClick={handleLog}>{user ? 'Logout' : 'Login'}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
