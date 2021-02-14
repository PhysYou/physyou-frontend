import React, {useContext, useEffect, useState} from 'react';
import {Box, Paper} from '@material-ui/core';
import Navbar from '../../shared/navbar';
import ExerciseList from '../../shared/exerciseList';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBar from "../../shared/sideBar";
import DatePicker from "react-horizontal-datepicker";
import {UserContext} from "../../providers/UserProvider";
import {firestore} from "../../firebase";
import {useHistory} from "react-router-dom";

export default function PatientHome() {
    const [exercises, setExercises] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const history = useHistory();

    const user = useContext(UserContext)

    useEffect(() => {
        if(user?.uid && selectedDate){
            let exercisesRef = firestore.collection('exercises')
            let query = exercisesRef.where('patient', '==', user.uid).where('date', '==', selectedDate.toLocaleDateString());
            query.onSnapshot((items) => {
                setExercises(items.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                })));
            })
        }
    }, [user, selectedDate])

    const handleClick = (item) => {
        history.push(`/patient/exercises/${item.id}`)
    }

    return (
        <>
            <Box display='flex'>
                <SideBar personId={user?.doctor ?? null}/>
                <Box display='flex' flexDirection='column' flexGrow={1}>
                    <Box width='calc(100vw - 300px)' style={{backgroundColor: '#D5DFEF'}} py={3} px={2}>
                        <DatePicker getSelectedDay={(date) => setSelectedDate(new Date(date))}/>
                    </Box>
                    <Box display='flex' justifyContent="center" mt={3} flexGrow={1}>
                        <ExerciseList exercises={exercises} handleClick={handleClick}/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
