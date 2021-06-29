import React, { Component } from "react";
import { Link } from "react-router-dom"
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import Cookies from 'universal-cookie';
import axios from "axios";


const cookies = new Cookies();

class Login extends Component {


  constructor(props) {
    super(props);
  }

  state = {
    form: {
      "email": "",
      "clave": ""
    },
    error: false,
    errorMsg: ""
  }

  manejadorSubmit = e => {
    e.preventDefault();
  }

  manejadorChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  manejadorBoton = async () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log(this.state.form);
    const baseUrl = "http://localhost:5000/api/auth/login"
    axios.post(baseUrl, this.state.form, {
      headers: headers
    })
      .then(response => {

        if (response.status == 200) {
          localStorage.setItem("token", response.data.token);
          this.props.history.push("./admin/index");
          cookies.set("token", response.data.token);
          cookies.set("customer", response.data);
          cookies.set('nombre', '', response.nombre );
          cookies.set('apellido', '', response.apellido);
          cookies.set('foto', '1', response.foto);
          window.location.href = "/admin/index";
        } else if (response.status == 400) {
          this.setState({
            error: true,
            errorMsg: "nada" + response.data.message
          })
        }
        else {
          this.setState({
            error: true,
            errorMsg: "Error General"
          })
        }
      }).catch(error => {
        if (error.response.status == 400) {
          this.setState({
            error: true,
            errorMsg: error.response.data.message
          })
        } else {
          this.setState({
            error: true,
            errorMsg: "Error al conectarse con el api"
          })
        }

      })
  }

  /*componentDidMount() {
    let token = cookies.get('token');
    if (token != null) {
      window.location.href = "/auth/login";
    }
  }*/


  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <span className="btn-inner--icon">
                <img style={{ height: 90, width: 90, marginLeft: 130, marginTop: 5, marginBottom: 15 }}
                  alt="..."
                  src={
                    require("../../assets/img/logoSinFodo.jpg")
                      .default
                  }
                />
              </span>
              <div className="text-center text-muted mb-4">
                <small> Sign in with credentials</small>
              </div>
              <Form onSubmit={this.manejadorSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      onChange={this.manejadorChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="clave"
                      name="clave"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={this.manejadorChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div>
                  {this.state.error === true &&
                    <div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}
                    </div>
                  }
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" onClick={this.manejadorBoton}>
                    Sign in
                  </Button>
                </div>
              </Form>

            </CardBody>
          </Card>
          <Row className="mt-2">
            <Col className="text-right" xs="12" to="/auth/register" tag={Link}>
              <a
                className="text-light"
              >
                <small >Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  };
};


export default Login;
