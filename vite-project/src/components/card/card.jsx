import React from 'react';
import './card.css'

const Card = ({ game, onDelete, onShowDetails }) => {
  return (
    <div 
        className="card clickable-card "
        style={{ cursor: 'pointer' }}>
    
      <div className='card-content'>
        <h2 className='card-title title is-6'>{game.title}</h2>
        <button className='details-button' onClick={() => onShowDetails(game.id)}>Detalles</button>
        <button className='delete-button' onClick={() => onDelete(game.id)}>Borrar</button>
      </div>
      
    </div>
  );
};

export default Card;



