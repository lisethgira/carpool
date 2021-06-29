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

class calcularRuta extends React.Component {

    render() {
    return (
        <>
            <div className="clearfix"></div>
            {/*line modal*/}
            <div
                className="modal fade"
                id="squarespaceModal"
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
                      modal-dialog-centered modal-lg
                    "
                >
                    <div className="modal-content">

                        <div className="modal-header fadeIn first">
                            <Button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                <span aria-hidden="true">×</span
                                ><span className="sr-only">Cerrar</span>
                            </Button>

                            <h3 className="modal-title" id="lineModalLabel">
                                <img
                                    src="../../assets/img/animat-camp/29 - Map.gif"
                                    alt=""
                                    width="80"
                                    height="75"
                                    class="d-inline-block align-top"
                                />
                                Agrega tu Ruta
                            </h3>
                        </div>

                        <div className="modal-body">
                            {{ /*content goes here*/ }}
                            <form>

                                <div className="form-group fadeIn second">
                                    <label for="origen">¿Donde estás?</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="origen"
                                        placeholder="¿Donde estas?"
                                    />
                                </div>

                                <div className="form-group fadeIn third">
                                    <label for="destino">¿A Dónde irás?</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="destino"
                                        placeholder="¿Donde irás?"
                                    />
                                </div>

                                <div id="mode-selector" class="controls fadeIn fourth">
                                    <button
                                        type="button"
                                        className="btn btn-info btn-fill button2"
                                        name="type"
                                        id="changemode-driving"
                                    >
                                        Calcular
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
};
export default calcularRuta;