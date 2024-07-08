import "./Detail.css"
import { useState, useEffect} from "react";

const Detail = ({ id, handleOnClose }) => {
    const [character, setCharacters] = useState({});

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id} `)
        .then(response => response.json())
        .then((data)  => setCharacters(data[0])) 
    }, []);
    return (
        <div className="modalDetail">
            {
                !character ? <h2>Cargando...</h2>: (
                    <>
                        <h2>{character?.name}</h2>
                        <img style={{borderRadius: "100%", width: "150px", height: "100px"}} src={character?.image} alt={character.name} />
                        <br/>
                        <button onClick={handleOnClose}>Cerrar</button>
                    </>
                    
                )
                    
            }
            
        </div>
    )
}

export default Detail;