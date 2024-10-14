import React, { useState } from 'react';
import useAddGame from '../../hooks/useAddGame';
import './addCardModal.css'

const AddCardModal = ({ isOpen, onClose }) => {
  // const {addGame}
  const { createGame } = useAddGame();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    players: '',
    categories: '',
  });

  const handleChange = (e) => {
    const { title, value } = e.target;
    setFormData({
      ...formData,
      [title]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGame = {
      ...formData,
      players: parseInt(formData.players),
      categories: formData.categories.split(',').map((category) => category.trim()),
    };
    //await addGame(newGame);
    await createGame(newGame);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='modal-title'>Agregar Nuevo Juego</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input type="text" title="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div>
            <label>Descripción</label>
            <input title="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div>
            <label>Cantidad de Jugadores</label>
            <input type="number" title="players" value={formData.players} onChange={handleChange} required />
          </div>
          <div>
            <label>Categorías (separadas por '/')</label>
            <input type="text" title="categories" value={formData.categories} onChange={handleChange} required />
          </div>
          <button type="submit"className='submit-button' onClick={handleSubmit}>Agregar</button>
          <button type="button" className='cancel-button' onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
