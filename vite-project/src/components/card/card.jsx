import React from 'react';

const Card = ({ game, onDelete, onShowDetails }) => {
  return (
    <div 
        className="card clickable-card"
        style={{ cursor: 'pointer' }}>
    
      <div className='card-content'>
        <h2 className='card-title title is-6'>{game.name}</h2>
        <button onClick={() => onShowDetails(game.id)}>Detalles</button>
        <button onClick={() => onDelete(game.id)}>Borrar</button>
      </div>
      
    </div>
  );
};

export default Card;



