import React, { useState } from 'react';
import CardsSection from '../../components/cardsSection/cardsSection.jsx';
// import AddButton from '../../components/addButton/addButton.jsx';
import AddCardModal from '../../components/addCardModal/addCardModal.jsx';
import useFetchGames from '../../hooks/useFetchGames.jsx';
import useDeleteGame from '../../hooks/useDeleteGame';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { games, loading, error } = useFetchGames();
  const { deleteGame } = useDeleteGame();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    // navigate.push(`/game/${id}`);
    //navigate(`/games/${id}`);
    navigate(`/home/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteGame(id);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <h1 className='app-title'><strong>Título de la aplicación</strong></h1>
      </nav>

      <div className="main-content">
        {/* <AddButton onAdd={handleAdd} /> */}
        <button className='add-button' onClick={handleAdd}>Agregar juego</button>
        <CardsSection games={games} onDelete={handleDelete} onShowDetails={handleShowDetails} />
        <AddCardModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

    </div>
  );
};

export default Home;
