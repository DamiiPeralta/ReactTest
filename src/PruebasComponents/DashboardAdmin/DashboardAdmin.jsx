import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AñadirTarea from "../AñadirTarea/AñadirTarea";
import ContadordeTareas from '../ContadordeTareas/ContadordeTareas';
import TareaLista from '../TareaLista/TareaLista';
import ListaDias from '../ListaDias/ListaDias';
import DiaCompletado from '../DiaCompletado/DiaCompletado';
import Usuario from '../Usuario/Usuario';
import SaludoPersonalizado from '../SaludoPersonalizado/SaludoPersonalizado';
import FlexboxPrueba from '../FlexboxPrueba/FlexboxPrueba';
import styles from './DashboardAdmin.module.css';

const DashboardAdmin = () => {
    const [tareas, setTareas] = useState([
        { description: "esta es la tarea 1", experience: 10, id: 1719815609756, name: "tarea 1" },
        { description: "esta es la tarea 2", experience: 10, id: 1719815609753, name: "tarea 2" },
        { description: "esta es la tarea 3", experience: 10, id: 1719815609754, name: "tarea 3" }
    ]);

    const [diascompletados, setDiasCompletados] = useState([]);

    const [usuario, setUsuario] = useState({
        id: 1719815609753,
        nombre: "Damian",
        apellido: "Peralta",
        nacimiento: "1ro de Agosto 1993",
        experiencia: 0,
        nivel: 0,
        diascompletados: 0
    });

    useEffect(() => {
        const calcularExperienciaYNivel = () => {
            let experienciaTotal = diascompletados.reduce((acc, dia) => {
                return acc + dia.tareas.reduce((accTarea, tarea) => accTarea + tarea.experience, 0);
            }, 0);

            let nivel = Math.floor(experienciaTotal / 100);

            setUsuario(prevUsuario => ({
                ...prevUsuario,
                experiencia: experienciaTotal,
                nivel: nivel,
                diascompletados: diascompletados.length
            }));
        };

        calcularExperienciaYNivel();
    }, [diascompletados]);

    return (
        
        <>
          <Container>
            <h1>Dashboard Admin</h1>
            <Row className="mb-4">
                <Col md={4}>
                    <Usuario usuario={usuario} />
                </Col>
                <Col md={4}>
                    <AñadirTarea setTareas={setTareas} />
                </Col>
                <Col md={4}>
                    <ContadordeTareas tareas={tareas} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <TareaLista tareas={tareas} />
                </Col>
            </Row>
        </Container>
        <div>
          <ListaDias tareas={tareas} setDiasCompletados={setDiasCompletados} setTareas={setTareas}/>
          <DiaCompletado diascompletados={diascompletados} />
        </div>
        </>
    );
}

export default DashboardAdmin;
