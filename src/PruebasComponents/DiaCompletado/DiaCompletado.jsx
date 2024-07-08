import React from 'react';
import ContadordeTareas from "../ContadordeTareas/ContadordeTareas";
import styles from "./DiaCompletado.module.css";
import TareaLista from "../TareaLista/TareaLista";

const DiaCompletado = ({ diascompletados }) => {
    return (
        <div>
            <header>
                <h1>Estos son los días completados!</h1>
            </header>
            <div className={styles.diasContainer}>
                {diascompletados.map((diacompletado) => (
                    <div key={diacompletado.id} className={styles.container}>
                        <h2>Día: {diacompletado.diaHoy}</h2>
                        <TareaLista tareas={diacompletado.tareas} />
                        <ContadordeTareas tareas={diacompletado.tareas} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiaCompletado;
