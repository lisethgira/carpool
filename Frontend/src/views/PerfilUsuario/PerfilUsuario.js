import React from "react";


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

const perfilUsuario = () => {
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
                      src={
                        require("../../assets/img/avatar.jpg")
                          .default
                      }
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" style={{ marginTop: "40%" }}>
                <CardBody className="pt-0 pt-md-4" >
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
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
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button style={{marginLeft:"70%"}}
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
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
export default perfilUsuario;
