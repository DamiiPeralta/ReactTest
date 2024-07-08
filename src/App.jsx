import './App.css';
import DashboardAdmin from './PruebasComponents/DashboardAdmin/DashboardAdmin';
import NavBar from './PruebasComponents/NavBar/NavBar';
import ReactForm from './ReactForm/ReactForm';
import CharacterSheet from './ReactLifeCycle/CharacterSheet';
import PruebaComponent from "./ReactLifeCycle/PruebaComponent"
import FormikLogin from "./ReactForm/FormikLogin";
//import Login from './views/Login';
//import Home from './views/Home';
//import Pricing from './views/Pricing';
//import AboutMe from './views/Aboutme';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
        <NavBar />
        
        <FormikLogin />
        <ReactForm />
        <DashboardAdmin />
        <PruebaComponent />
        <CharacterSheet></CharacterSheet>
    </>
  );
}

export default App;
