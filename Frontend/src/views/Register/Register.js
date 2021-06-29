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

import axios from "axios";

//const http://localhost:5000/api/auth/register

class Register extends Component {

  state = {
    form: {
      "nombre": "",
      "apellido": "",
      "clave": "",
      "documento": "",
      "telefono": "",
      "email": "",
      "foto": ""
    },
    error: false,
    success: false,
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
    const baseUrl = "http://localhost:5000/api/auth/register"
    axios.post(baseUrl, this.state.form, {
      headers: headers
    })
      .then(response => {
        
        if(response.status == 200){
          window.location.href = "./auth/login";
          this.setState({
            success: true,
            errorMsg: "Se registro correctamente"
          })
        } else if(response.status == 400){
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
        if( error.response.status == 400){
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

  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <span className="btn-inner--icon">
                <img style={{ height: 90, width: 90, marginLeft: 175, marginTop: 5, marginBottom: 15 }}
                  alt="..."
                  src={
                    require("../../assets/img/logoInvertido.jpg")
                      .default
                  }
                />
              </span>
              <div className="text-center text-muted mb-4">
                <small>Sign up with credentials</small>
              </div>
              <Form role="form" onSubmit={this.manejadorSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre" type="text" />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-sound-wave" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Apellido" type="text" name="apellido" onChange={this.manejadorChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-copy-04" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Documento" type="text" name="documento" onChange={this.manejadorChange} />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-tablet-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Telefono" type="number" name="telefono" onChange={this.manejadorChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      name="email"
                      onChange={this.manejadorChange}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      name="clave"
                      onChange={this.manejadorChange}
                    />
                     </InputGroup>
                </FormGroup> 
                <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-image" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="foto"
                      type="text"
                      name="foto"
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

                  {this.state.success === true &&
                    <div className="alert alert-success" role="alert">
                      {this.state.errorMsg}
                    </div>
                  }
                </div>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit" onClick={this.manejadorBoton}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-2">
            <Col className="text-right" xs="12" to="/auth/login" tag={Link}>
              <a
                className="text-light"
              >
                <small >Sign in</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
  
};

export default Register;
