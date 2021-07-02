import React, { Component, Fragment, useState, useEffect } from 'react';
import Login from "../App"
import { Dashboard } from "../pages/Dashboard"

// import { LoginAsync } from '../managers/ApiManager';
// import { urlVerificator } from '../managers/HelperManager';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    PrivateRoute,
    PublicPage,
    Redirect,
} from "react-router-dom";

// componente padre inicial que carga al componente login
function Rutas(props) {

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/Login" component={() => <Login />} />
                    <Route path="/Dashboard" component={() => <Dashboard />} />



                    <Route path="*" component={() => <Redirect to="/Login" />} />
                </Switch>
            </Router>
        </Fragment>


    );
}

export default Rutas;