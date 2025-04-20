import React from 'react';
import '../styles/CharacterModal.css';

function CharacterModal({ character, onClose }) {
  const {
    name,
    house,
    actor,
    dateOfBirth,
    ancestry,
    patronus,
    species,
    wand,
    alive,
  } = character;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{name}</h2>
        <p><strong>House:</strong> {house || 'N/A'}</p>
        <p><strong>Actor:</strong> {actor || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> {dateOfBirth || 'N/A'}</p>
        <p><strong>Ancestry:</strong> {ancestry || 'N/A'}</p>
        <p><strong>Patronus:</strong> {patronus || 'N/A'}</p>
        <p><strong>Species:</strong> {species || 'N/A'}</p>
        <p><strong>Wand:</strong> 
          {wand?.wood ? ` Wood: ${wand.wood},` : ''}
          {wand?.core ? ` Core: ${wand.core},` : ''}
          {wand?.length ? ` Length: ${wand.length} inches` : ' N/A'}
        </p>
        <p><strong>Alive:</strong> {alive ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default CharacterModal;
