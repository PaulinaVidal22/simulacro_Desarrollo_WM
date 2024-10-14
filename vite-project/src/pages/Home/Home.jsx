import React, { useState } from 'react';
import CardsSection from '../../components/cardsSection/cardsSection.jsx';
import AddCardModal from '../../components/addCardModal/addCardModal.jsx';
import useFetchGames from '../../hooks/useFetchGames.jsx';
import useDeleteGame from '../../hooks/useDeleteGame';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { games, loading, error } = useFetchGames();
  const { removeGame, error: deleteError} = useDeleteGame();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    // navigate.push(`/game/${id}`);
    //navigate(`/games/${id}`);
    navigate(`/home/${id}`);
  };

  const handleDelete = async (id) => {
    await removeGame(id);
  };

//   const handleAdd = () => {
//     // You can trigger a modal or a form for adding a new game
//     navigate.push('/add-game'); // Example route for adding a new game
//   };


    const handleAdd = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


  return (
    <>
      
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <h1 className='app-title'><strong>UCUlimpiadas 2024</strong></h1>
      </nav>

      <div className="main-content">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <>
            <button className='add-button' onClick={handleAdd}>Agregar juego</button>
            <CardsSection games={games} onDelete={handleDelete} onShowDetails={handleShowDetails} />
            <AddCardModal isOpen={isModalOpen} onClose={closeModal} />
          </>
        )}
      </div>

    </>
  );
};

export default Home;
