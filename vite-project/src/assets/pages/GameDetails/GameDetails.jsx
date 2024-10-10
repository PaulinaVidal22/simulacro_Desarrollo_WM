// import React from 'react';


// const GameDetailsPage = ({onBack}) => {
//   return (
//     <div id= {game.id} className="game-details">
//         <button onClick={onBack} className="back-button button is-primary">go back</button>


//       <div className="game-info">
//               <h3><strong>name : </strong>{game.name}</h3>
//               <h3><strong>description : </strong>{game.description}</h3>
//               <h3><strong>number of player : </strong>{game.players}</h3>
//               <h3><strong>category : </strong>{game.category}</h3>
//               <h3></h3>
//         </div>
//     </div>
//   );
// };

// export default GameDetailsPage;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchGames from '../../hooks/useFetchGames';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { games } = useFetchGames();
  
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) return <div>Game not found</div>;

  return (
    <div>
      <button onClick={() => navigate.push('/')}>Atrás</button>
      <h2>{game.name}</h2>
      <p>Descripción: {game.description}</p>
      <p>Cantidad de Jugadores: {game.players}</p>
      <p>Categorías: {game.categories.join(', ')}</p>
    </div>
  );
};

export default GameDetails;
