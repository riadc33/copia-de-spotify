import React, { useState } from "react";
import "./css/App.css"
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Label,
} from "reactstrap";
import logo from "./assets/logo.svg";
import facebook from "./assets/facebook.svg";
import apple from "./assets/apple.svg";
import google from "./assets/google-g.svg";

function App() {
  const [user, setUser] = useState("");
  const [animate, setAnimate] = useState(false);
  const funHandleLogin = (e) => {

    console.log(e.style, "click");
    window.location.href = "/Dashboard";
  };
  return (
    <div className="container-global-login">
      <div className="head-login">
        <p style={{ fontSize: 30, fontStyle: 'italic' }}>Aviones</p>
      </div>
      <div className="body-login">
        <div className="content-body-login">
          <Button className="button-login btn-facebook">
            <img
              src={facebook}
              width="22px"
              height="22px"
              style={{ marginRight: "10px", marginBottom: "5px" }}
            />
            <b>CONTINUAR CON FACEBOOK</b>
          </Button>

          <Button className="button-login btn-apple">
            <img
              src={apple}
              width="22px"
              height="22px"
              style={{ marginRight: "10px", marginBottom: "5px" }}
            />
            <b>CONTINUAR CON APPLE</b>
          </Button>

          <Button className="button-login btn-normal">
            <img
              src={google}
              width="18px"
              height="18px"
              style={{ marginRight: "10px", marginBottom: "5px" }}
            />
            <b>CONTINUAR CON GOOGLE</b>
          </Button>

          <Button className="button-login btn-normal">
            <b>CONTINUAR CON NUMERO DE TELEFONO</b>
          </Button>
          <div className="divider">
            <strong
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                backgroundColor: "#ffffff",
              }}
            >
              O
            </strong>
          </div>
          <div>
            <Form className="form-login">

              <FormGroup>
                <Label style={{ marginBottom: "5px" }}>
                  <b>Correo electrónico o nombre de usuario</b>
                </Label>
                <Input
                  type="text"
                  name="email"
                  placeholder="Correo electrónico o nombre de usuario"
                  required
                  onChange={(e) => e.target.value.toLowerCase()}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ marginBottom: "5px" }}>
                  <b>Contraseña</b>
                </Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  required
                />
              </FormGroup>
              <div style={{ marginTop: "15px", marginBottom: "40px" }}>
                <a href="google">¿Has olvidado tu contraseña?</a>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormGroup style={{ marginTop: "15px" }}>
                  <Label style={{ fontWeight: 500 }}>
                    <Input type="checkbox" />
                    Recordarme
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Button
                    className="btn-login"
                    onClick={() => (window.location.href = "/Dashboard")}
                    block
                  >
                    INICIAR SESION
                  </Button>
                </FormGroup>
              </div>
            </Form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
