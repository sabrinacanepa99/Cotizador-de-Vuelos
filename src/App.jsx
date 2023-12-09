import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Inicio from './components/Inicio';
import Historial from './components/Historial';

function App() {

  return (
    <Router>
      <Routes>
          <Route path={"/"} element={<Inicio />} />
          <Route path="/historial" element={<Historial/>} />
      </Routes>
    </Router>
  );
}

export default App