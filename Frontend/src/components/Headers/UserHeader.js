import React from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

// reactstrap components
import {Container, Row, Col } from "reactstrap";



class UserHeader extends React.Component {
  render(){
    const cookies = new Cookies
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/banner.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="8" md="10">
              <h1 className="display-2 text-white">¡Hola!</h1>
              <p className="text-white mt-0 mb-3">
                este es tu perfil de usuario sientete libre de actualizarlo siempre que lo requieras.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
};
export default UserHeader;
