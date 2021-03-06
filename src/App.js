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
        <img className="logo-login" src={logo} />
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
                  <b>Correo electr??nico o nombre de usuario</b>
                </Label>
                <Input
                  type="text"
                  name="email"
                  placeholder="Correo electr??nico o nombre de usuario"
                  required
                  onChange={(e) => e.target.value.toLowerCase()}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ marginBottom: "5px" }}>
                  <b>Contrase??a</b>
                </Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Contrase??a"
                  required
                />
              </FormGroup>
              <div style={{ marginTop: "15px", marginBottom: "40px" }}>
                <a href="google">??Has olvidado tu contrase??a?</a>
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
            <div className="divider"></div>
            <div className="">
              <p>??No tienes cuenta?</p>
              <Button
                className="button-login btn-normal "
                style={{ fontWeight: 500 }}
              >
                <b>REGISTRATE EN SPOTIFY</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
