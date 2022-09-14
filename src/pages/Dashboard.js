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
        <div className="contenedorprincipal">

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <table border="1" cellpadding="2">
              <caption>
                Carga transportada por tipo de avión
              </caption>
              <tbody>
                <tr>
                  <td align="center">Tamaño del avión

                  </td>
                  <td align="center">Porcentaje</td>
                </tr>
                <tr>
                  <td>Avión pequeño (hasta 30 t de carga)</td>
                  <td align="center">46%</td>
                </tr>
                <tr>
                  <td>Avión mediano (entre 30 y 50 t de carga)</td>
                  <td align="center">36%</td>
                </tr>

                <tr>
                  <td>Avión grande (más de 70 t de carga)</td>
                  <td align="center">18%</td>
                </tr>
                <tr>
                  <td>Avión grande (más de 150 t de carga)</td>
                  <td align="center">18%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  <Reproductor />
 */}
    </div>
  )
}
