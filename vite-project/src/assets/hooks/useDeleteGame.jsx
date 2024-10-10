import { useState } from 'react';

const url = 'http://localhost:3000/api/games';

const useDeleteGame = () => {
  const [error, setError] = useState(null);

  const deleteGame = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      window.location.reload(); // Refreshes the page to show updated game list
    } catch (err) {
      setError(err);
    }
  };

  return { deleteGame, error };
};

export default useDeleteGame;
