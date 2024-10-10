// import React from "react";
// import DeleteButton from "vite-project/src/assets/components/DeleteButton/deleteButton.jsx"
// import "vite-project/src/assets/components/card/card.css";

// export function Card({ title}) {
    

//     return (
//         <div    
//             className="card clickable-card"
//             //onClick={openReadModal}
//             style={{ cursor: 'pointer' }}>
//             <div className="card-content">
//                 <p className="card-title title is-6"><strong>{title}</strong></p>
//                 <DeleteButton></DeleteButton>
//             </div>
//         </div>
//     );
// }


import React from 'react';

const Card = ({ game, onDelete, onShowDetails }) => {
  return (
    <div className="card">
      <h2>{game.name}</h2>
      <button onClick={() => onShowDetails(game.id)}>Detalles</button>
      <button onClick={() => onDelete(game.id)}>Borrar</button>
    </div>
  );
};

export default Card;



