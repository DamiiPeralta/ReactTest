import React, { useState } from "react";
import { ListGroup, Modal, Button } from 'react-bootstrap';
import styles from "./TareaLista.module.css";

const TareaLista = ({ tareas }) => {
    const [selectedTarea, setSelectedTarea] = useState(null);

    const openModal = (tarea) => {
        setSelectedTarea(tarea);
    };

    const closeModal = () => {
        setSelectedTarea(null);
    };

    return (
        <div className={styles.listContainer}>
            <ListGroup>
                {tareas.map((tarea) => (
                    <ListGroup.Item 
                        key={tarea.id} 
                        action 
                        onClick={() => openModal(tarea)}
                    >
                        <h5>{tarea.name}</h5>
                        <p>{tarea.description}</p>
                        <p>Experiencia: {tarea.experience}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {selectedTarea && (
                <Modal show={!!selectedTarea} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedTarea.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{selectedTarea.description}</p>
                        <p>Experiencia: {selectedTarea.experience}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default TareaLista;
