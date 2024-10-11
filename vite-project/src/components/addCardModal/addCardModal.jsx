import React, { useState } from 'react';
import useAddGame from '../../hooks/useAddGame';
import 'src/assets/components/addCardModal/addCardModal.css'

const AddCardModal = ({ isOpen, onClose }) => {
  const { addGame } = useAddGame();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    players: '',
    categories: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGame = {
      ...formData,
      players: parseInt(formData.players),
      categories: formData.categories.split(',').map((category) => category.trim()),
    };
    await addGame(newGame);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Nuevo Juego</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Descripción</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div>
            <label>Cantidad de Jugadores</label>
            <input type="number" name="players" value={formData.players} onChange={handleChange} required />
          </div>
          <div>
            <label>Categorías (separadas por comas)</label>
            <input type="text" name="categories" value={formData.categories} onChange={handleChange} required />
          </div>
          <button type="submit">Agregar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
