import React, { Component } from "react";
import { Link } from "react-router-dom"
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import Cookies from 'universal-cookie';
import axios from "axios";


const cookies = new Cookies();

class Login extends Component {


  constructor(props) {
    super(props);
  }

  state = {
    form: {
      "email": "",
      "clave": ""
    },
    error: false,
    errorMsg: ""
  }

  manejadorSubmit = e => {
    e.preventDefault();
  }

  manejadorChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form)
  }

  manejadorBoton = async () => {
    const baseUrl = "http://localhost:5000/api/auth/login"
    await axios.post(baseUrl, this.state.form)
      .then(response => {
        if (response.data.status === "ok") {
          localStorage.setItem("token", response.data.result.token);
          this.props.history.push("./admin/index")
        }
        else {
          this.setState({
            error: true,
            errorMsg: response.data.result.error_smg
          })
        }
      }).catch(error => {
        console.log(error);
        this.setState({
          error: true,
          errorMsg: "Error al conectarse con el api"
        })
      })
  }

  componentDidMount() {
    fetch('https://owcrud-api.now.sh/api/posts')
    if (cookies.get('email')) {
      window.location.href = "./admin/index";
    }
  }

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <span className="btn-inner--icon">
                <img style={{ height: 90, width: 90, marginLeft: 130, marginTop: 5, marginBottom: 15 }}
                  alt="..."
                  src={
                    require("../../assets/img/logoSinFodo.jpg")
                      .default
                  }
                />
              </span>
              <div className="text-center text-muted mb-4">
                <small> Sign in with credentials</small>
              </div>
              <Form onSubmit={this.manejadorSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      onChange={this.manejadorOnchange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="clave"
                      name="clave"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={this.manejadorOnchange}
                    />
                  </InputGroup>
                </FormGroup>
                <div>
                  {this.state.error === true &&
                    <div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}
                    </div>
                  }
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" onClick={this.manejadorBoton}>
                    Sign in
                  </Button>
                </div>
              </Form>

            </CardBody>
          </Card>
          <Row className="mt-2">
            <Col className="text-right" xs="12" to="/auth/register" tag={Link}>
              <a
                className="text-light"
              >
                <small >Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  };
};


export default Login;
