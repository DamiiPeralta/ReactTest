import React, { useRef } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import styles from "./AñadirTarea.module.css";

const AñadirTarea = ({ setTareas }) => {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const experienceRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();

        let name = nameRef.current.value;
        let description = descriptionRef.current.value;
        let experience = parseInt(experienceRef.current.value);

        if (name && description && experience) {
            let tarea = {
                id: Date.now(),
                name,
                description,
                experience,
            };
            setTareas(prevState => [...prevState, tarea]);

            nameRef.current.value = '';
            descriptionRef.current.value = '';
            experienceRef.current.value = '';
        } else {
            alert("Te faltan rellenar campos");
        }
    }

    return (
        <Container className={styles.formContainer}>
            <h1>Agregar Tarea</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTareaNombre">
                    <Form.Label>Nombre de la tarea:</Form.Label>
                    <Form.Control type="text" ref={nameRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTareaExperiencia">
                    <Form.Label>Experiencia:</Form.Label>
                    <Form.Control type="number" ref={experienceRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTareaDescripcion">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control type="text" ref={descriptionRef} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar Tarea
                </Button>
            </Form>
        </Container>
    );
}

export default AñadirTarea;
