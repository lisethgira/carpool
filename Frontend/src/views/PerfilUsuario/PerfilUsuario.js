import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import UserHeader from "components/Headers/UserHeader.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../redux/actions'

export default function Profile({ history }) {
  const [pressActionButton, setPressActionButton] = useState(false)

  const { handleSubmit, control, setValue, formState: { errors } } = useForm();
  const loading = useSelector(({ user }) => user.loading)
  const data = useSelector(({ user }) => user.data)
  const success = useSelector(({ user }) => user.success)
  const error = useSelector(({ user }) => user.error)

  const dispatch = useDispatch()
  const haveUpdate = (d) => dispatch(userActions.update(d))

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setValue('nombre', localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)).nombre : null)
    setValue('apellido', localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)).apellido : null)
    setValue('documento', localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)).documento : null)
    setValue('telefono', localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)).telefono : null)
    setValue('email', localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)).email : null)
    setValue('foto', localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)).foto : null)
  }, [])

  useEffect(() => {
    if (loading) return
    if (success) {
      enqueueSnackbar("Registro actualizado correctamente", { variant: 'success', preventDuplicate: true });
      setPressActionButton(false)
    }
    if (error) {
      enqueueSnackbar("Error al actualizar el registro", { variant: 'error', preventDuplicate: true });
      setPressActionButton(false)
    }
  }, [pressActionButton, loading, success, error])

  const onSubmit = (d) => {
    setPressActionButton(true)
    haveUpdate(d)
  }

  useEffect(() => {
    if(data){
      const data = {
        ...
      }
    }
  },[pressActionButton, loading, data])

  const tfNombre = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          label="Nombre"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={loading}
          error={(errors.nombre ? true : false)}
          helperText={(errors.nombre ? errors.nombre.message : "")}
          {...field}
        />)
      }
      name="nombre"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )
  const tfApellido = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          label="Apellido"
          margin="normal"
          variant="outlined" apellido
          fullWidth
          disabled={loading}
          error={(errors.apellido ? true : false)}
          helperText={(errors.apellido ? errors.apellido.message : "")}
          {...field}
        />)
      }
      name="apellido"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  const tfDocumento = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          type="number"
          label="Documento"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={loading}
          error={(errors.documento ? true : false)}
          helperText={(errors.documento ? errors.documento.message : "")}
          {...field}
        />)
      }
      name="documento"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  const tfTelefono = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          type="number"
          label="Teléfono"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={loading}
          error={(errors.telefono ? true : false)}
          helperText={(errors.telefono ? errors.telefono.message : "")}
          {...field}
        />)
      }
      name="telefono"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  const tfEmail = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          type="email"
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={false}
          error={(errors.nombre ? true : false)}
          helperText={(errors.nombre ? errors.nombre.message : "")}
          {...field}
        />)
      }
      name="email"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  const tfFoto = (
    <Controller
      defaultValue=""
      render={({ field }) => (
        <TextField
          label="Foto"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled={loading}
          error={(errors.foto ? true : false)}
          helperText={(errors.foto ? errors.foto.message : "")}
          {...field}
        />)
      }
      name="foto"
      control={control}
      rules={{ required: "Campo requerido" }}
    />
  )

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow" style={{ background: "LightSeaGreen" }}>
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={data && data.foto}
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" style={{ marginTop: "40%" }}>
                <CardBody className="pt-0 pt-md-4" >
                  <div className="text-center">
                    <i/>
                    <span>
                      {data && data.nombre + " " + data.apellido} 
                    </span>

                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Documento : <span>{data && data.documento}
                      </span>
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      teléfono :
                      <span>
                        {data && data.telefono}
                      </span>
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      email : 
                      <span>
                        {data && data.email}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          {tfNombre}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          {tfApellido}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          {tfDocumento}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          {tfTelefono}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          {tfEmail}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          {tfFoto}
                        </FormGroup>
                      </Col>
                    </Row>
                    <div>
                      {/* {this.state.error === true &&
                    <div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}
                    </div>
                  }

                  {this.state.success === true &&
                    <div className="alert alert-success" role="alert">
                      {this.state.errorMsg}
                    </div>
                  } */}
                    </div>
                    <Button
                      type="submit"
                      style={{ marginLeft: "70%" }}
                      color="info"
                    >
                      Actualizar Perfil
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}