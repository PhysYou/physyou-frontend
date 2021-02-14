import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { useHistory } from 'react-router-dom';

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
    title: {
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
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="h6" className={classes.title}>
                        PhysYou
                    </Typography>
                    <Button color="inherit" size="large">Exercises</Button>
                    <Button color="inherit" size="large">Messages</Button>
                    <Button color="inherit" size="large" onClick={handleLog}>{user ? 'Logout' : 'Login'}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
