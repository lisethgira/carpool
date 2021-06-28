import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  FormGroup,
  Form,
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";




import Header from "components/Headers/Header.js";

const Index = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container>
        <h1 style={{ textAlign:"center", color: "violet" }}>
          Busca el viaje que más se acomode a tus necesidades
        </h1>
          <Form role="form">
            <FormGroup className=" row col-12 card card-sm animated zoomIn" style={{ width: "100%", height: "100%", align:"center"}}>
              <InputGroup className=" card-body row no-gutters align-items-center ">
                    <Input  className="alinearbuscartexto form-control form-control-lg form-control-borderless"
                      type="text"
                      placeholder="Busca un transporte cerca"
                      name="filterPost"
                    />
              </InputGroup>
            </FormGroup>
          </Form>
      </Container>


    </>

  );
};



export default Index;
