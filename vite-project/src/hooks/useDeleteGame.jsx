import { useState } from 'react';

const url = 'http://localhost:3000/api/games';

const useDeleteGame = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  const deleteGame = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedSports = games.filter((game) => game.id !== id);
      setGames(updatedSports);
      window.location.reload(); // Refreshes the page to show updated game list
    } catch (err) {
      setError(err);
    }
  };

  const removeGame = (id) => {
    deleteGame(id).then(() => {
      setGames(games.filter((game) => game.id !== id));
    });
  };

  return { removeGame, error };
};

export default useDeleteGame;
