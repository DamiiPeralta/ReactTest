import { useState } from "react";
import Characters from "./Characters";

const CharacterSheet = () => {
    const [filterHouse, setFilterHouse] = useState(null);
    const houses = [
        "Gryffindor",
        "Slytherin",
        "Hufflepuff",
        "Ravenclaw"
    ];

    return (
        <>
            <div>
                <button onClick={() => setFilterHouse(houses[0])}>Gryffindor</button>
                <button onClick={() => setFilterHouse(houses[1])}>Slytherin</button>
                <button onClick={() => setFilterHouse(houses[2])}>Hufflepuff</button>
                <button onClick={() => setFilterHouse(houses[3])}>Ravenclaw</button>
                <button onClick={() => setFilterHouse(null)}>Reestablecer</button>
                <div>
                    <Characters house={filterHouse} />
                </div>
            </div>
        </>
    );
};

export default CharacterSheet;
