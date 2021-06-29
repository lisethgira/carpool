import React, {Component} from "react";
// reactstrap components
import {
  FormGroup,
  Form,
  Container,
  InputGroup,
  Input,
  Button
} from "reactstrap";

import Header from "components/Headers/Header.js";



class Index extends Component {
  /*static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

RideSearch = reduxForm({
  form: 'RideSearch'
})(RideSearch)

RideSearch = connect(
  (state, props) => ({
    initialValues: props.search
  })
)(RideSearch);*/

render(){
  const { handleSubmit } = this.props
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container>
        <h1 style={{ textAlign:"center", color: "violet" }}>
          Busca el viaje que más se acomode a tus necesidades
        </h1>
          <Form  onSubmit={handleSubmit} className='rides-search'>
            <FormGroup className=" row col-12 card card-sm animated zoomIn" style={{ width: "100%", height: "100%", align:"center"}}>
              <InputGroup className=" card-body row no-gutters align-items-center ">
                    <Input  className="alinearbuscartexto form-control form-control-lg form-control-borderless"
                      type="text"
                      placeholder="Busca un transporte cerca"
                      name="filterPost"
                      label="ruta cercana"
                    />
              </InputGroup>
              <Button style={{marginLeft:"80%", marginRight:"2%"}}
                      color="info"
                      type="submit" 
                      className="btn btn-default form-submit">buscar Carpooler</Button>
            </FormGroup>
          </Form>
      </Container>


    </>

  );
};
}


export default Index;
