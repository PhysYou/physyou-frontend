import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import DoctorHome from "./index.js";
import MyPatientProfile from "./mypatients";
import AddExercisePage from "./mypatients/addExercise";

export default function PatientRoutes(props) {
    return (
        <Switch>
            <Route path={props.match.url} exact component={DoctorHome}/>
            <Route path={props.match.url + "/mypatients/:patientId/addExercise"} render={(match) => <AddExercisePage match={match}/>}/>
            <Route path={props.match.url + "/mypatients/:patientId"} render={(match) => <MyPatientProfile match={match}/>}/>
        </Switch>
    )
}
