import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import styles from "./Usuario.module.css";

const Usuario = ({ usuario }) => {
    return (
        <Card className={`p-4 mb-4 ${styles.container}`} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="text-center mb-4">¡Bienvenido {usuario.nombre} {usuario.apellido}!</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Experiencia: {usuario.experiencia}</ListGroupItem>
                    <ListGroupItem>Nivel: {usuario.nivel}</ListGroupItem>
                    <ListGroupItem>Días Completados: {usuario.diascompletados}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Usuario;
