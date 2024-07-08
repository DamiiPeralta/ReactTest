import { useEffect, useState } from "react";
import Card from "./Card";
import Detail from "./Detail";

const Characters = ({ house }) => {
    const [characters, setCharacters] = useState([]);
    const [detail, setDetail] = useState(false);
    const [id, setId] = useState(0);
    const [filterHouse, setFilterHouse] = useState(house);

    const handleOnClick = (id) => {
        setId(id);
        setDetail(true);
    };

    const handleOnClose = () => {
        setDetail(false);
    };

    useEffect(() => {
        setFilterHouse(house);
    }, [house]);

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((data) => setCharacters(data));

        return () => {
            setId(0);
        };
    }, []);

    return (
        <>
            <div>
                {house === null ? <h1>Ninguna casa filtrada</h1>: <h1>Casa filtrada: {house}</h1>  }
                {characters.map((character) => {
                    if (filterHouse === null || character.house === filterHouse) {
                        return <Card key={character.id} character={character} handleOnClick={handleOnClick} />;
                    }
                    return null;
                })}
                {detail && <Detail id={id} handleOnClose={handleOnClose} />}
            </div>
        </>
    );
};

export default Characters;
