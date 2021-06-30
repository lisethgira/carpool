import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import UserHeader from "components/Headers/UserHeader.js";

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

import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../redux/actions'

export default function FuncionesUsuario({ history }) {
    
  const { handleSubmit, control, setValue, formState: { errors } } = useForm();

  const loading = false
    const tfHoraSalidaOrigen = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    label="Hora de Salida de Origen"
                    margin="normal"
                    variant="outlined"
                    className="form-check-input fadeIn third"
                    type="time"
                    fullWidth
                    disabled={loading}
                    error={(errors.nombre ? true : false)}
                    helperText={(errors.horaSalidaOrigen ? errors.horaSalidaOrigen.message : "")}
                    {...field}
                />)
            }
            name="horaSalidaOrigen"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

    const tfHoraLlegadaDestino = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    label="Hora de Llegada a Destino"
                    margin="normal"
                    variant="outlined"
                    className="form-check-input fadeIn third"
                    type="time"
                    fullWidth
                    disabled={loading}
                    error={(errors.nombre ? true : false)}
                    helperText={(errors.horaLLegadaDestino? errors.horaLLegadaDestino.message : "")}
                    {...field}
                />)
            }
            name="horaLLgadaDestino"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )
    const tfPlaca = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    label="Placa"
                    margin="normal"
                    variant="outlined" placa
                    fullWidth
                    disabled={loading}
                    error={(errors.placa ? true : false)}
                    helperText={(errors.placa ? errors.placa.message : "")}
                    {...field}
                />)
            }
            name="placa"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

    const tfCupos= (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    label="Cupos"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={loading}
                    error={(errors.documento ? true : false)}
                    helperText={(errors.documento ? errors.documento.message : "")}
                    {...field}
                />)
            }
            name="cupos"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

    const tfDiasServicio = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    type="button"
                    label="Días de Servicio"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={loading}
                    error={(errors.diasServicio ? true : false)}
                    helperText={(errors.diasServicio ? errors.diasServicio.message : "")}
                    {...field}
                />)
            }
            name="diasServicio"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

    const tfPrecio = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    type="number"
                    label="Precio"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={false}
                    error={(errors.precio ? true : false)}
                    helperText={(errors.precio ? errors.precio.message : "")}
                    {...field}
                />)
            }
            name="precio"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

    const tfDirecionOrigen = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    label="Dirección de Origen"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={loading}
                    error={(errors.direccionOrigen ? true : false)}
                    helperText={(errors.direccionOrigen ? errors.direccionOrigen.message : "")}
                    {...field}
                />)
            }
            name="direccionOrigen"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

    const tfDirecionDestino = (
        <Controller
            defaultValue=""
            render={({ field }) => (
                <TextField
                    label="Dirección de Destino"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={loading}
                    error={(errors.direccionDestino ? true : false)}
                    helperText={(errors.direccionDestino ? errors.direccionDestino.message : "")}
                    {...field}
                />)
            }
            name="direccionDestino"
            control={control}
            rules={{ required: "Campo requerido" }}
        />
    )

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


    )
}