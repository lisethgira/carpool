import React, { useEffect } from 'react'
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom"
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import { loginActions } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Login({ history }) {

  const data = useSelector(({ login }) => login.data)
  const loading = useSelector(({ login }) => login.loading)
  const logout = useSelector(({ login }) => login.logout)

  const dispatch = useDispatch()
  const handleLogin = (d) => dispatch(loginActions.login(d))

  useEffect(() => {
    if (!data) history.push('/auth/login')
    else history.push('/admin')
  }, [data])

  useEffect(() => {
    if (logout) history.push('/auth/login')
    console.log(logout)
  }, [logout])

  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => handleLogin(data)

  const tfUsername = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          label="Usuario"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={loading}
          error={(errors.email ? true : false)}
          helperText={(errors.email ? errors.email.message : "")}
          {...field}
        />)
      }
      name="email"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  const tfPassword = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          label="Contraseña"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={loading}
          type="password"
          error={(errors.clave && Boolean(errors.clave))}
          helperText={(errors.clave ? errors.clave.message : "")}
          {...field}
        />)
      }
      name="clave"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  return (
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
            <small> Sign in with credentials </small>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className="mb-3">
              {tfUsername}
            </FormGroup>
            <FormGroup>
              {tfPassword}
            </FormGroup>
            <div>
              {/* {this.state.error === true &&
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMsg}
                </div>
              } */}
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit"> Sign in </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-2">
        <Col className="text-right" xs="12" to="/auth/register" tag={Link}>
          <a className="text-light">
            <small >Create new account</small>
          </a>
        </Col>
      </Row>
    </Col>
  )
}