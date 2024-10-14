import React from 'react';
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
            path="/home/*"
            element={<Home />} />
          <Route 
            path="/home/:id" 
            element={<GameDetails />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;

