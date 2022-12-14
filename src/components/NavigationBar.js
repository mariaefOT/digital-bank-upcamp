import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Logout from './Logout';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <NavDropdown title="Checking" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/viewChecking">Checking Accounts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/createChecking">Create Checking Accounts</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Logout/>
          </Container>
        </Navbar>
      );
}

export default NavigationBar;