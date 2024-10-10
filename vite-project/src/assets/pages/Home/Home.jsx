import React from 'react';
import CardsSection from '../../components/CardsSection';
import AddButton from '../../components/AddButton';
import useFetchGames from '../../hooks/useFetchGames';
import useDeleteGame from '../../hooks/useDeleteGame';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { games, loading, error } = useFetchGames();
  const { deleteGame } = useDeleteGame();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    navigate.push(`/game/${id}`);
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
      <h1>Título de la aplicación</h1>
      <AddButton onAdd={handleAdd} />
      <CardsSection games={games} onDelete={handleDelete} onShowDetails={handleShowDetails} />
      <AddCardModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
