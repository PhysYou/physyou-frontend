import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Typography,
    Paper,
    Box,
    makeStyles, TextField,
} from '@material-ui/core';
import {firestore} from "../firebase";
import {UserContext} from "../providers/UserProvider";
import {useHistory} from "react-router-dom";

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

function SideBar({personId}) {
    const classes = useStyles();
    const user = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [person, setPerson] = useState(null);
    const history = useHistory();

    function handleSubmit() {
        let usersRef = firestore.collection('users')
        let query = usersRef.where('email', "==", email).where('type', '==', 'doctor')
        query.get().then(async (users) => {
            if(!users.empty){
                let doc = users.docs[0];
                let userDoc = usersRef.doc(user.uid);
                await userDoc.update({doctor: doc.id})
                history.go(0);
            } else {
                alert("Error fetching")
            }
        })
    }

    useEffect(async () => {
        console.log(personId)
        if(personId) {
            console.log(personId)
            const usersRef = firestore.collection('users')
            const person = await usersRef.doc(personId).get();
            setPerson(person.data());
        }
    }, [personId])

    const item = person
        ? <Box textAlign='center'>
            <Box mb={2}>
                <Avatar className={classes.avatar}></Avatar>
            </Box>
            <Typography variant='h6'>{person?.type == 'doctor' ? "Dr." : null} {person.firstName} {person.lastName}</Typography>
            <Typography variant='h7' color='secondary'>
                Since February 2021
            </Typography>
            <Typography variant='body2'>Notes on diagnosis, plan</Typography>
            <Box mt={8}>
                <Button className={classes.msgBtn}>Message</Button>
            </Box>
        </Box>
        : <Box display="flex" flexDirection="column">
            <TextField label="Doctor's Email" variant='filled' placeholder="Type you doctor's email" onChange={(evt) => setEmail(evt.target.value)}/>
            <Button variant='outlined' color='secondary' style={{marginTop: '10px'}} onClick={handleSubmit}>Submit</Button>
        </Box>


    return (
        <Paper className={classes.sideBar}>
            {
                user ? item : null
            }
        </Paper>
    )
}

export default SideBar;
