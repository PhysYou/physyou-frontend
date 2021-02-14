import React, {Component, useEffect, useState} from 'react';
import {Fab, Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DatePicker from "react-horizontal-datepicker";
import SideBar from "../../../shared/sideBar";
import {Add} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {useHistory} from "react-router-dom";
import ExerciseList from "../../../shared/exerciseList";
import {firestore} from "../../../firebase";
import ExerciseForm from "../../../shared/exerciseForm";


export default function MyPatientProfile({match}){
    const {patientId} = match.match.params;
    const history = useHistory();
    const [exercises, setExercises] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    const [showAddExercise, setShowAddExercise] = useState(false);

    useEffect(() => {
        if(patientId && selectedDate){
            let exercisesRef = firestore.collection('exercises')
            let query = exercisesRef.where('patient', '==', patientId).where('date', '==', selectedDate.toLocaleDateString());
            query.onSnapshot((items) => {
                setExercises(items.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                })));
            })
        }
    }, [patientId, selectedDate])

    return (
        <Box display="flex">
            <SideBar personId={patientId}/>
            <Box display='flex' flexDirection='column'>
                <Box width='calc(100vw - 300px)' style={{backgroundColor: '#D5DFEF'}} py={3} px={2}>
                    <DatePicker getSelectedDay={(date) => setSelectedDate(new Date(date))}/>
                </Box>
                <Box p={1} display={'flex'} flexDirection='column'>
                    <Fab color="primary" aria-label="add" style={{alignSelf: 'flex-end', display: showAddExercise ? "None" : '', marginRight: '30px'}} onClick={() => setShowAddExercise(true)}>
                        <Add/>
                    </Fab>
                    <Box display='flex' justifyContent='center'>
                        {
                            showAddExercise ? <ExerciseForm patientId={patientId} handleClose={() => setShowAddExercise(false)} selectedDate={selectedDate}/> : <ExerciseList exercises={exercises} handleClick={() => console.log("clicked")}/>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
