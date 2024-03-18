import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Recipes from "./components/pages/Recipes"

import Contact from "./components/pages/Contact";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";

// import TailwindTest from "./components/TailWindTest";

//import 'tailwindcss'

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Login" element={<Login />} /> 
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
