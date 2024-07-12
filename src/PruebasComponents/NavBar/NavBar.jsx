import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className={styles['navbar-brand']}>
                    MiAplicación
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/loginpage">Login Page</Nav.Link>
                        <Nav.Link as={Link} to="/homepage">Howarts Characters</Nav.Link>
                        <Nav.Link as={Link} to="/dinamiccomponents">Dinamic Components</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme">Dashboard Admin</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">
                            <button variant="outline-primary" className="me-2 btn btn-outline-primary">Iniciar Sesión</button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register">
                            <button variant="primary" className="btn btn-primary">Registrarse</button>
                        </Nav.Link>
                    </Nav>  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
