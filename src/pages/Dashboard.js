import React from 'react'
import { Alert, Button, Form, FormGroup, Input, Footer } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Reproductor } from "../components/reproductor"
import { SideBar } from "../components/sidebar"
import { Nav } from "../components/nav"
export const Dashboard = () => {
  return (
    <div className="d-flex app Dashboard  " id="wrapper">
      <SideBar />
      <div className="Dashboard" id="page-content-wrapper">
        <Nav />

      </div>
      <Reproductor />

    </div>
  )
}
