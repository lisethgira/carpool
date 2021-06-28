import React from 'react';

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
    Modal,
    InputGroupText
} from "reactstrap";


const diasServicio = () => {
    return (
        <>
            {/*modal días Servicio*/}
            <div className="clearfix"></div>

            {/*line modal*/}
            <div
                className="modal fade"
                id="dias"
                tabindex="-1"
                role="document"
                aria-labelledby="modalLabel"
                aria-hidden="true"
                data-dismiss="modal"
                data-backdrop="false"
            >
                <div
                    className="
      modal-dialog
      animated
      zoomIn
      modal-dialog-centered modal-md
    "
                >
                    <div className="modal-content">

                        <div className="modal-header fadeIn first">
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                <span aria-hidden="true">×</span
                                ><span class="sr-only">Cerrar</span>
                            </button>

                            <h3 className="modal-title" id="lineModalLabel">
                                <img
                                    src="../../assets/img/animat-camp/07 - Calendar.gif"
                                    alt=""
                                    width="80"
                                    height="75"
                                    class="d-inline-block align-top"
                                />
                                ¿Que dias prestas servicio?
                            </h3>
                        </div>

                        <div className="modal-body">
                            {/*content goes here */}

                            <div className="container">

                                <div className="row">



                                    <div class="checkbox fadeIn second" style={{ marginLeft: "7.813em" }}>
                                        <input className="checkbox" id="lunes" type="checkbox" />
                                        <label className="checkbox" for="lunes"> Lunes </label>

                                        <input className="checkbox" id="martes" type="checkbox" />
                                        <label style={{ marginLeft: "3.125em" }} className="checkbox" for="martes" > Martes </label>

                                        <input className="checkbox" id="miercoles" type="checkbox" />
                                        <label style={{ marginLeft: "3.125em" }} className="checkbox" for="miercoles"> Miercoles </label>

                                        <input className="checkbox" id="jueves" type="checkbox" />
                                        <label style={{ marginLeft: "3.125em" }} className="checkbox" for="jueves"> Jueves </label>

                                    </div>

                                    <div className="checkbox fadeIn third" style={{ marginLeft: "10.625em", marginTop: "0.625em" }}>
                                        <input className="checkbox" id="viernes" type="checkbox" />
                                        <label className="checkbox" for="viernes"> Viernes </label>

                                        <input className="checkbox" id="sabado" type="checkbox" />
                                        <label style="margin-left: 3.125em;" className="checkbox" for="sabado"> Sabado </label>

                                        <input className="checkbox" id="domingo" type="checkbox" />
                                        <label style={{ marginLeft: "3.125em" }} className="checkbox" for="domingo"> Domingo </label>

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div class="modal-footer fadeIn fourth">


                            <Button
                                type="button"
                                id="guardarDatos"
                                class="btn button4 cancelarModal btn-lg"
                                data-action="save"
                                role="button"
                                data-dismiss="modal"
                                onClick={(e) => e.preventDefault()}
                            >
                                guardar
                            </Button>

                            <Button
                                class="btn button3 cancelarModal btn-lg"
                                id="cerrarModal"
                                name="cerrarModal"
                                type="button"
                                data-dismiss="modal"
                                onClick={(e) => e.preventDefault()}
                            >
                                Cerrar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default diasServicio;