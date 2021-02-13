import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from './index.js'
import Login from './login.js'
import Signup from './signup.js'
import PatientRoutes from "./patient/routes";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/patient" component={PatientRoutes}/>
        </Switch>
    )
}
