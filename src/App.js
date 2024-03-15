import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/app">
        <Routes>
          <Route path="/" /> {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
      <Footer /> 
    </div>
  );
}

export default App;
