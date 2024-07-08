import React, { useEffect, useState } from "react";
import { Card, Container } from 'react-bootstrap';
import styles from './ContadordeTareas.module.css';

const ContadordeTareas = ({ tareas }) => {
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        const totalExperience = tareas.reduce((acc, element) => acc + element.experience, 0);
        setExperience(totalExperience);
    }, [tareas]);

    return (
        <Container className={styles['card-container']}>
            <Card className={`text-center ${styles.card}`}>
                <Card.Body>
                    <Card.Title>Total de Tareas</Card.Title>
                    <Card.Text>{tareas.length}</Card.Text>
                </Card.Body>
            </Card>
            <Card className={`text-center mt-4 ${styles.card}`}>
                <Card.Body>
                    <Card.Title>Total Experiencia</Card.Title>
                    <Card.Text>{experience}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ContadordeTareas;
