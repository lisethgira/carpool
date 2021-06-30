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
    Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";


const funcionesUsuario = () => {

    return (
        <>
            <Header />
            {/* Page content */}
            <Container style={{ marginBottom: "10%" }}>

            </Container>
            <Container className="mt--7" fluid style={{ marginLeft: "20%" }}>c
                <Row>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-info shadow">
                            <CardHeader className="bg-info border-0">
                                <Row className="align-items-center">
                                    <Col xs="12">
                                        <h1 className="mb-0" style={{ textAlign: "center", color: "violet" }}>Aquí puedes modificar tu rol de usuario y crear un viaje en caso de que seas carpooler</h1>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="12">
                                                <FormGroup>

                                                    <div>
                                                        <h4 className="title titulocarpooler fadeIn third" style={{ paddingBottom: "0%" }}>
                                                            ¿Quieres ser Carpooling?
                                                        </h4>
                                                    </div>

                                                    <div className="form-check form-check-inline col-md-1 fadeIn third"

                                                    >
                                                        <input
                                                            className="form-check-input fadeIn third"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                        />

                                                        <label
                                                            class="form-check-label fadeIn third"
                                                            for="inlineRadio1"
                                                            style={{ marginLeft: "15%", paddingTop: "0%" }}
                                                        >Si
                                                        </label>
                                                    </div>

                                                    <div className="form-check form-check-inline col-md-1 fadeIn third"

                                                    >
                                                        <input
                                                            className="form-check-input fadeIn third"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                        />

                                                        <label
                                                            class="form-check-label fadeIn third"
                                                            for="inlineRadio1"
                                                            style={{ marginLeft: "20%", paddingTop: "0%" }}
                                                        >No
                                                        </label>
                                                    </div>
                                                    <Button style={{ marginLeft: "70%" }}
                                                        color="primary"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        cambiar rol
                                                    </Button>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                                <Form>
                                    <div className="pl-lg-4">
                                        <div>
                                            <h4 className="title titulocarpooler fadeIn third" style={{ paddingBottom: "0%" }}>
                                                Crea tu servicio</h4>
                                        </div>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-horaSalidaOrigen"
                                                    >
                                                        Hora de Salida
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        type="time"
                                                        ps-input-time
                                                        format="hh:mm"
                                                        placeholder="Hora de salida de Origen"
                                                        id="input-horaSalidaOrigen"
                                                        name="horaSalidaOrigen"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-horaSalidaDestino"
                                                    >
                                                        Hora de LLegada
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        type="time"
                                                        ps-input-time
                                                        format="hh:mm"
                                                        placeholder="Hora de llegada a Destino"
                                                        id="input-horaSalidaDestino"
                                                        name="horaSalidaDestino"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-placa"
                                                    >
                                                        Placa
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-placa"
                                                        placeholder="XPT456"
                                                        name="placa"
                                                        maxlength="6"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-cupos"
                                                    >
                                                        cupos
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        className="form-control-alternative"
                                                        id="input-cupos"
                                                        placeholder="4"
                                                        name="cupos"
                                                        maxlength="6"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-diasServicio"
                                                    >
                                                        Días de Servicio
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-diasServicio"
                                                        placeholder="Dias de servicio"
                                                        type="button"
                                                        name="diasServicio"
                                                        data-toggle="modal"
                                                        data-target="#dias"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-total"
                                                    >
                                                        Valor del Viaje
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative "
                                                        id="input-total"
                                                        placeholder="2000"
                                                        type="number"
                                                        name="total"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>


                                        <div>
                                            <h4 className="title titulocarpooler fadeIn third" style={{ paddingBottom: "0%" }}>
                                                Agrega tu ruta</h4>
                                        </div>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-dirOrigen"
                                                    >
                                                        Dirección de Origen
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Hora de salida de Origen"
                                                        id="input-dirOrigen"
                                                        name="dirOrigen"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-dirDestino"
                                                    >
                                                        Dirección de Destino
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Hora de llegada a Destino"
                                                        id="input-dirDestino"
                                                        name="dirDestino"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button style={{ marginLeft: "70%" }}
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Agregar Ruta
                                        </Button>


                                        <Button style={{ marginLeft: "70%", marginTop: "5%" }}
                                            color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            data-toggle="modal"
                                            data-target="#squarespaceModal"
                                            id="agregarDireccion"
                                            name="agregarDireccion"
                                        >
                                            Crear Servicio
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
export default funcionesUsuario;