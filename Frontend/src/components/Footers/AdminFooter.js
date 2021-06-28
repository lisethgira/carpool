/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://github.com/lisethgira/carpool"
                  target="_blank">
                  Liseth Giraldo - lisethgiraldo628@gmail.com
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="https://www.linkedin.com/in/liseth-giraldo-251605140/"
                    target="_blank">
                    Linkedin
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/liseth_giraldo628/"
                    target="_blank">
                    Instagram
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
  );
};

export default Footer;
