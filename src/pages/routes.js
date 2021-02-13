import React, {useContext} from 'react';
import {UserContext} from "../providers/UserProvider";
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from './index.js'
import Login from './login.js'
import Signup from './signup.js'
import PatientRoutes from "./patient/routes";
import DoctorRoutes from './doctor/routes';

export default function Routes() {
    const user = useContext(UserContext);
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" render={() => !user ? <Login/> : <Redirect to={`/${user.type}`}/>}/>
            <Route path="/signup" render={() => !user ? <Signup/> : <Redirect to={`/${user.type}`}/>}/>
            <Route path="/patient" component={PatientRoutes}/>
            <Route path='/doctor' component={DoctorRoutes}/>
        </Switch>
    )
}
