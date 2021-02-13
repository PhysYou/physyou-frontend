import React, {Component} from 'react';
import {Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DatePicker from "react-horizontal-datepicker";
import SideBar from "../../../shared/sideBar";

class AddExerciseModal extends Component {
    render() {
        return null;
    }
}

export default function MyPatientProfile(){
    const patient = {
        name: 'IAN PEREZ',
        startDate: 'since May 2019',
        notes: 'Notes on diagnosis, treatment, physical therapy plan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }
    return (
        <Box display="flex">
            <SideBar/>
            <Box display='flex' flexDirection='column'>
                <Box width='calc(100vw - 300px)' style={{backgroundColor: '#D5DFEF'}} py={3} px={2}>
                    <DatePicker getSelectedDay={(date) => console.log(date)}/>
                </Box>
            </Box>
        </Box>
    )
}
