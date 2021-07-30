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

          <img src={logo} width="131px" height="40px"></img>
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
        <div className="play-list-sidebar">
          <ul className="puntos-none ">
            <li>
              <Link className="style-letras-sitebar" to="/Dashboard">
                <Button className="btn-sidebar ">
                  <div className="background-plus-sidebar-icon">
                    <Plus size={16} color="#000000" />
                  </div>
                  <span className="letra-sidebar">Crear playlist</span>

                </Button>
              </Link>
            </li>

            <li>
              <Link className="style-letras-sitebar" to="/Wallet">
                <Button className="btn-sidebar ">
                  <div className="background-Heart-sidebar-icon">
                    <Heart size={16} />
                  </div>
                  <span className="letra-sidebar">Tus me gusta</span>

                </Button>
              </Link>
            </li>
            <li>
              <Link className="style-letras-sitebar" to="/Profile">
                <Button className="btn-sidebar  ">
                  <div className="background-SignalTower-sidebar-icon">
                    <SignalTower color="#20CD5B" size={16} />
                  </div>
                  <span className="letra-sidebar">
                    Tus episodios
                  </span>
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
