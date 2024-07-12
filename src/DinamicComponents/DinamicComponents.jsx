import NavigationBar from "./NavigationBar"
import LoginPage from "./LoginPage"
import AboutPage from "./AboutPage"
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

const DinamicComponents = () => {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setContacts(data));
    });

    return (
        <div>
            <NavigationBar />
        </div>
    )
}

export default DinamicComponents;