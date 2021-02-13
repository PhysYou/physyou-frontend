import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import PatientHome from "./index.js";

export default function PatientRoutes(props) {
    return (
        <Switch>
            <Route path={props.match.url} exact component={PatientHome}/>
        </Switch>
    )
}
