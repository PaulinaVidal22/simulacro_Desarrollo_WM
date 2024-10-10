import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/api/games';

const useFetchGames = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGames = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setGames(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchGames(); 
  }, []); 


  return { games, loading, error };
};

export default useFetchGames;