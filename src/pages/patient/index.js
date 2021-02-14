import React, {useContext} from 'react';
import {Box, Paper} from '@material-ui/core';
import Navbar from '../../shared/navbar';
import ExerciseList from '../../shared/exerciseList';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBar from "../../shared/sideBar";
import DatePicker from "react-horizontal-datepicker";
import {UserContext} from "../../providers/UserProvider";

export default function PatientHome() {
    // const doctor = {
    //     name: 'Ian Perez',
    //     start: 'since May 2019',
    //     blurb: 'Blurb about doctor and what he specializes in etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    //
    // }

    const user = useContext(UserContext)

    return (
        <>
            <Box display='flex'>
                <SideBar person={user?.doctor ?? null}/>
                <Box display='flex' flexDirection='column' flexGrow={1}>
                    <Box width='calc(100vw - 300px)' style={{backgroundColor: '#D5DFEF'}} py={3} px={2}>
                        <DatePicker getSelectedDay={(date) => console.log(date)}/>
                    </Box>
                    <Box display='flex' justifyContent="center" mt={3} flexGrow={1}>
                        <ExerciseList/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
