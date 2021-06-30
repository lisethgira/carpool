import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { loginActions } from '../../redux/actions'
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

const AdminNavbar = (props) => {

  const logout = useSelector(({ login }) => login.logout)

  const dispatch = useDispatch()
  const handleLogout = () => dispatch(loginActions.logout())
  const data = useSelector(({ user }) => user.data)

  useEffect(() => {
    if (logout) props.history.push('/auth/login')
  }, [logout])

  useEffect(() =>{
    if(localStorage.getItem(`token`)){
      console.log("si")
    }else{
      console.log("no")
    }
  }, [])

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={data && data.foto}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {data && data.nombre + "  " + data.apellido} 
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">¡Bienvenid@!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/perfilUsuario" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>Mi perfil</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
