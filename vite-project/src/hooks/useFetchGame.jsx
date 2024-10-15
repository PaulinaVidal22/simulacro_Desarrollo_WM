import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const useFetchGame = () => {

  const { id } = useParams();

  const url = `http://localhost:3000/api/games/${id}`;

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchGame = async () => {
    try {
      const response = await fetch( url , { method: "GET" })
      const data = await response.json();
      setGame(data[0]);
      setLoading(false);

    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchGame(); 
    }
  }, [id]);

  return { game, loading, error };
};

export default useFetchGame;
