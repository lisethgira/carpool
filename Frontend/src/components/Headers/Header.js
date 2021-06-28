import React, { Fragment } from 'react'


// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
 /* logout = async e => {
    e.preventDefault()
    let { dispatch } = this.props
    await dispatch(logout())
    Notify({ value: 'Logged out!!' })
  }*/
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8" md="6" style={{minHeight: "100px",
          backgroundImage:
            "url(" +
            require("../../assets/img/carpoolbanner2.jpg").default +
            ")",
          backgroundSize: "cover",}}>
        <Container fluid>
          <div className="header-body">
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
