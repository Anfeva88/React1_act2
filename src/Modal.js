import React from 'react';
import './Modal.css'; // Importa un archivo de estilos para el modal

const Modal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p><strong>Estatus:</strong> {character.status}</p>
        <p><strong>Especies:</strong> {character.species}</p>
        <p><strong>Jardin:</strong> {character.gender}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
        <p><strong>Ubicacion:</strong> {character.location.name}</p>
      </div>
    </div>
  );
};

export default Modal;
