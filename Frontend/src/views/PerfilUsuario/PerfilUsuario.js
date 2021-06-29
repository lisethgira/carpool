
import React, { Component} from "react";

import Cookies from 'universal-cookie';
import axios from "axios";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const cookies = new Cookies();


class perfilUsuario extends Component {
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



  peticionGet=()=>{
    const perfilUrl ="http://localhost:5000/api/admin/profile"
    const headers = {
      'Content-Type': 'application/json',
    }
    
    console.log(this.state.form);
    axios.get(perfilUrl).then(response=>{
     JSON.stringify(this.state.form);
     headers = {
      'Content-Type': 'application/json',
    }
      this.setState(error =>console.log({error:true,
        errorMsg: "Se tragieron los datos del usuario correctamente"}));
    }).catch(error=>{
      console.log({error: true,
        errorMsg: error.response.data.message});
    })
    }

  manejadorBoton = async () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    console.log(this.state.form);
    const baseUrl = "http://localhost:5000/api/admin/actualizarUsuario"
    axios.put(baseUrl, this.state.form, {
      headers: headers
    })
      .then(response => {
        this.peticionGet();
        if(response.status == 200){
          window.location.href = "./admin/perfilUsuario";
          this.setState({
            success: true,
            errorMsg: "Se actualizo correctamente"
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
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow" style={{ background: "LightSeaGreen" }}>
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={this.manejadorChange.foto}
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" style={{ marginTop: "40%" }}>
                <CardBody className="pt-0 pt-md-4" >
                  <div className="text-center">
                    <h3 name="apellido">
                      Nombre : {this.manejadorChange.nombre} {this.manejadorChange.apellido}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Documento : {this.manejadorChange.documneto}
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      teléfono : {this.manejadorChange.telefono}
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      email : {this.manejadorChange.email}
                    </div>
                  </div>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-nombre"
                          >
                            Nombre
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="liseth"
                            id="input-nombre"
                            placeholder="nombre"
                            type="text"
                            name="nombre"
                            onChange={this.manejadorChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-apellido"
                          >
                            Apellido
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Giraldo"
                            id="input-apellido"
                            placeholder="Apellido"
                            type="text"
                            name="apellido"
                            onChange={this.manejadorChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-documento"
                          >
                            Documento
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-docuento"
                            placeholder="1036965346"
                            type="number"
                            name="documento"
                            onChange={this.manejadorChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-telefoo"
                          >
                            Teléfono
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-telefono"
                            placeholder="3105142774"
                            type="number"
                            name="telefono"
                            onChange={this.manejadorChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="holamundo@example.com"
                            type="email"
                            name="email"
                            onChange={this.manejadorChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-foto"
                          >
                            foto
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-foto"
                            placeholder="https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-mujer-joven_24877-18520.jpg"
                            type="text"
                            name="foto"
                            onChange={this.manejadorChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
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
                    <Button
                    type="submit" 
                    style={{marginLeft:"70%"}}
                      color="info"
                      href="#pablo"
                      type="submit"
                      onClick={this.manejadorBoton}
                    >
                      Actualizar Perfil
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
}
export default perfilUsuario;
