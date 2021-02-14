import React, {Component} from 'react';
import {Fab, Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DatePicker from "react-horizontal-datepicker";
import SideBar from "../../../shared/sideBar";
import {Add} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ExerciseForm from "../../../shared/exerciseForm";


export default function AddExercisePage({match}){
    const {patientId} = match.match.params;
    return (
        <Box display="flex">
            <SideBar personId={patientId}/>
            <Box display='flex' flexDirection='column'>
                <Box width='calc(100vw - 300px)' style={{backgroundColor: '#D5DFEF'}} py={3} px={2}>
                    <DatePicker getSelectedDay={(date) => console.log(date)}/>
                </Box>
                <Box display='flex' justifyContent='center'>
                    <ExerciseForm patientId={patientId}/>
                </Box>
            </Box>
        </Box>
    )
}
