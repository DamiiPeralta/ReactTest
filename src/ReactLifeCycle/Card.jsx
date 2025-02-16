const Card = ({ character, handleOnClick }) => {
    const { name, house, id } = character;

    return (
        <div>
            <h2>{name}</h2>
            <h2>{house}</h2>
            <button onClick={() => handleOnClick(id)}>Ver detalle</button>
        </div>
    )
}

export default Card;