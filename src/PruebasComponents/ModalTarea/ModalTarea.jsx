import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./ModalTarea.module.css";

const ModalTarea = ({ isOpen, onRequestClose, tarea }) => {
    return (
        <Modal 
            show={isOpen} 
            onHide={onRequestClose} 
            className={styles.modal} 
            dialogClassName={styles.overlay} 
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{tarea.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{tarea.description}</h3>
                <p>Experiencia: {tarea.experience}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick={onRequestClose} 
                    className={styles.button}
                >
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalTarea;
