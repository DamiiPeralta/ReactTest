import './App.css';
import DashboardAdmin from './PruebasComponents/DashboardAdmin/DashboardAdmin';
import NavBar from './PruebasComponents/NavBar/NavBar';
import ReactForm from './ReactForm/ReactForm';
import CharacterSheet from './ReactLifeCycle/CharacterSheet';
import PruebaComponent from "./ReactLifeCycle/PruebaComponent"
import FormikLogin from "./ReactForm/FormikLogin";
import Login from './views/Login';
import Home from './views/Home';
import Pricing from './views/Pricing';
import AboutMe from './views/AboutMe';
import Features from './views/Features';
import Register from './views/Register';
import DetailPage from './DinamicComponents/DetailPage';
import DinamicComponents from "./DinamicComponents/DinamicComponents"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/homepage' element={<Home />} />

          </Routes>
          <DinamicComponents />

        <FormikLogin />
        <ReactForm />
        <DashboardAdmin />
        <PruebaComponent />
        <CharacterSheet /> 
    </>
  );
}

export default App;
