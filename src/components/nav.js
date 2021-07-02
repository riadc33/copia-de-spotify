import React from "react";
import { Alert, Button, Form, FormGroup, Input, Select } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../assets/Spotify_Logo_CMYK_White.png"
import FeatherIcon from "feather-icons-react";
import { UilWallet } from "@iconscout/react-unicons";
import { Home } from '@styled-icons/fluentui-system-regular/Home'

import { User } from "@styled-icons/remix-line/User"
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft"
import { ChevronRight } from "@styled-icons/feather/ChevronRight"
import { ArrowDropDown } from "@styled-icons/material/ArrowDropDown";
export const Nav = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="div-btns-left-and-right">
                    <Button className="btn-left"><ChevronLeft className="icons-left-and-right" size={24} color="#ffffff" /></Button>
                    <Button className="btn-right"><ChevronRight className="icons-left-and-right" size={24} color="#ffffff" /></Button>
                </div>
                <div className="div-btns-perfil-nav">
                    <Button className="btn-premiun">PREMIUM</Button>
                    <Button className="btn-perfil"><div className="icon-perfil-div"><User size={16} /></div><span className="letra-perfil">Riad Cure</span><div className="icon-arrow"><ArrowDropDown size={20} /></div></Button >
                </div>

            </div>
        </>
    );
};
