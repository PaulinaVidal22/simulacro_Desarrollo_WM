import React from 'react';
import Card from '../card/card.jsx';
import './cardsSection.css';

const CardsSection = ({ games, onDelete, onShowDetails }) => {

  return (
    <div className="cards-section">
      {games && games.map((game) => (
        <Card key={game.id} game={game} onDelete={onDelete} onShowDetails={onShowDetails} />
      ))}
    </div>
  );
};

export default CardsSection;
