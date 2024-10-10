import { useState } from 'react';

const url = 'http://localhost:3000/api/games';

const useAddGame = () => {
  const [error, setError] = useState(null);

  const addGame = async (newGame) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGame),
      });
      window.location.reload(); // Refreshes the page to show the updated game list
    } catch (err) {
      setError(err);
    }
  };

  return { addGame, error };
};

export default useAddGame;
