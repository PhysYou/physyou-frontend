import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import PatientHome from "./index.js";
import ExerciseDetail from "./exercises/exerciseDetail";
import PatientCamera from "./exercises/exercise-camera";

export default function PatientRoutes(props) {
    return (
        <Switch>
            <Route path={props.match.url} exact component={PatientHome}/>
            <Route path={props.match.url + "/exercises/:exerciseId/perform"} component={PatientCamera}/>
            <Route path={props.match.url + "/exercises/:exerciseId"} component={ExerciseDetail}/>
        </Switch>
    )
}
