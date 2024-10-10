import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './assets/components/cardsSection/cardsSection.jsx';
import GameDetails from './assets/pages/GameDetails/GameDetails.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

