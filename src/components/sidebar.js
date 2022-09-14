import React from "react";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../assets/Spotify_Logo_CMYK_White.png"
import FeatherIcon from "feather-icons-react";
import { UilWallet } from "@iconscout/react-unicons";
import { Home } from '@styled-icons/fluentui-system-regular/Home'

import { Search } from "@styled-icons/boxicons-regular/Search"
import { Books } from "@styled-icons/icomoon/Books"
import { Plus } from "@styled-icons/boxicons-regular/Plus"
import { Heart } from "@styled-icons/boxicons-solid/Heart"
import { SignalTower } from "@styled-icons/remix-line/SignalTower"



export const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="content-sidebar-logo">

          <p style={{ fontSize: 30, fontStyle: 'italic', color: 'white' }}>Aviones</p>
        </div>
        <div>
          <ul className="puntos-none ">
            <li>
              <Link className="style-letras-sitebar" to="/Dashboard">
                <Button className="btn-sidebar ">
                  <Home className="iconsStyle" size={24} />
                  Inicio
                </Button>
              </Link>
            </li>

            <li>
              <Link className="style-letras-sitebar" to="/Wallet">
                <Button className="btn-sidebar ">
                  <Search className="iconsStyle" size={24} /> Buscar
                </Button>
              </Link>
            </li>
            <li>
              <Link className="style-letras-sitebar" to="/Profile">
                <Button className="btn-sidebar  ">
                  <Books className="iconsStyle" size={24} />
                  Tu Biblioteca
                </Button>
              </Link>
            </li>
          </ul>


        </div>

        <div className="dividir-sidebar">
          <hr style={{ color: "#b3b3b3", width: "193px" }} />
        </div>
      </div>
    </>
  );
};
