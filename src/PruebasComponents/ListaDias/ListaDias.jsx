import DiadeTareas from "../../Models/DiadeTareas"
import styles from "./ListaDias.module.css";

const ListaDias = ({tareas, setDiasCompletados, setTareas}) => {
    const formatearFecha = (fecha) => {
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opciones);
    }
    
    // Crear una nueva fecha
    const hoy = new Date();
    function handleSubmit(event) {
        event.preventDefault();

        let dia = new DiadeTareas()

        dia.id = Date.now()
        dia.tareas = tareas
        dia.diaHoy = formatearFecha(hoy);

        setDiasCompletados(prevState => [...prevState, dia])
        setTareas([])
    }

    
    
    return (
        <>
            <div>
                <button className={styles.button}  onClick={handleSubmit}>Finalizar Dia!</button>
            </div>
        </>
    )
}

export default ListaDias;