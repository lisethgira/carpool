import React from 'react'


// reactstrap components
import { Container } from "reactstrap";

class Header extends React.Component {

  render() {
 
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
};

export default Header;
