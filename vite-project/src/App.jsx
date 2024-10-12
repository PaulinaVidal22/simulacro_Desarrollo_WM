import React from 'react';
//import { Routes, Route, Navigate, Router } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import GameDetails from './pages/GameDetails/GameDetails.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
          <Route 
            //exact path="/" 
            path="/home/*"
            element={<Home />} />
          <Route 
            //path="/game/:id" 
            path="/home/:id" 
            element={<GameDetails />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;

