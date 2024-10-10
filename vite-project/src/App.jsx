
// import React from 'react';
// import useFetchGames from './assets/hooks/useFetchGames';
// import './App.css'

// function App() {
//   const { games, loading, error } = useFetchGames();

//   if (loading) return <div>Loading games...</div>;
//   if (error) return <div>Error loading games!</div>;


//   return (
//     <>
//       <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
//         <h2 className="app-title"><strong>UCUlimpiadas</strong></h2>
//       </nav>
//       <div className="main-content">

//         <div className="button-container flex-container">

//           <button 
//           className={`button customButton`} 
//           onClick={() => openModal()}> 
//           + add play</button>

//         </div>

//         <div className='cards-container'>
//         {games.map((game) => (
//             <Card
//             key={game.id} 
//             title={game.title}
//             details={game.details} />
//           ))}
//         </div>

//       </div>
//     </>
//   )
// }

// export default App

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

