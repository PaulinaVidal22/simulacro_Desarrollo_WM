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
      <button 
        className="back-button button is-primary" 
        onClick={() => navigate.push('/')}>Atrás
      </button>

      <div className="game-info">
        <h2 className='game-name title-is-4'>{game.name}</h2>
        <p className='game-description'>
          <strong className='description-field title-is-6'>
            Descripción: </strong>
          {game.description}</p>

        <p className='game-players'>
          <strong className='players-field title-is-6'>
            Cantidad de Jugadores:</strong> 
            {game.players}</p>

        <p className='game-categories'>
          <strong className='categories-field title-is-6'>
            Categorías: </strong>
            {game.categories.join(', ')}</p>

      </div>

    </div>
  );
};

export default GameDetails;
