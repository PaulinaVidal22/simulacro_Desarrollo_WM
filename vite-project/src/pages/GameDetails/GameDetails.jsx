import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchGame from '../../hooks/useFetchGame';
import './GameDetails.css'

const GameDetails = () => {
  const navigate = useNavigate();
  const { game, loading, error } = useFetchGame();
  

  return (
    <>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!game && <div>Game not found</div>}
       {!loading && !error && game && (
          <div className='game-details'>
            <button 
              className="back-button button is-primary"
              onClick={() => navigate("/home")}>
              Atrás
            </button>
            <div className="game-info">
              <h2 className='game-name title-is-4'>{game.title}</h2>
              <p className='game-description'>
                <strong className='description-field title-is-6'>Descripción: </strong>
                {game.description}
              </p>

              <p className='game-players'>
                <strong className='players-field title-is-6'>Cantidad de Jugadores:</strong> 
                {game.players}
              </p>

              <p className='game-categories'>
                <strong className='categories-field title-is-6'>Categorías: </strong>
                {game.categories}
              </p>
            </div>
          </div>
         )} 
    </>
  );
};

export default GameDetails;
