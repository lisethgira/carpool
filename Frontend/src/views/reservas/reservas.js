import React from "react";


// reactstrap components
import {
    Card,
    CardHeader,
    Table,
    Container,
    Row,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  

const reservas = () => {
    return (
        <>
            <Header />
            {/* Page content */}
            <Container style={{marginBottom:"7%"}}></Container>
            <Container className="mt--7" fluid >
                {/* Dark table */}
                <Row className="mt-5">
                    <div className="col">
                        <Card className="bg-default shadow">
                            <CardHeader className="bg-transparent border-0">
                                <h3 className="text-white mb-0">Aquí dispone de la información de sus reservas</h3>
                            </CardHeader>
                            <Table
                                className="align-items-center table-dark table-flush"
                                responsive
                            >
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Cedula</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Hora de partida</th>
                                        <th scope="col">Hora de llegada</th>
                                        <th scope="col" >Dias reservados</th>
                                        <th scope="col" >Cupos reservados</th>
                                        <th scope="col" >Total a pagar</th>
                                        <th scope="col">Contactalo</th>
                                        <th scope="col" >Cancelar viaje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};
export default reservas;
