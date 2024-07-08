import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
            <Container fluid>
                <Navbar.Brand href="#" className={styles['navbar-brand']}>MiAplicación</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Características</Nav.Link>
                        <Nav.Link href="#pricing">Precios</Nav.Link>
                        <Nav.Link href="#aboutme">About me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-primary" className="me-2">Iniciar Sesión</Button>
                        <Button variant="primary">Registrarse</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
