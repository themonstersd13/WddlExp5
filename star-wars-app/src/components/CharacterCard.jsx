import React, { useState } from 'react';
import '../styles/CharacterCard.css';

function CharacterCard({ character, onClick }) {
  const [displayCard, setDisplayCard] = useState(true);

  const houseColor = {
    Gryffindor: '#FFD700',
    Slytherin: '#2A623D',
    Ravenclaw: '#0E1A40',
    Hufflepuff: '#FFDB58',
    default: '#D3D3D3',
  };

  const bgColor = houseColor[character.house] || houseColor.default;

  if (!character.image || character.image.trim() === '') {
    return null;
  }

  const handleImageError = () => {
    setDisplayCard(false);
  };

  if (!displayCard) return null;

  return (
    <div className="character-card" style={{ backgroundColor: bgColor }} onClick={onClick}>
      <img
        src={character.image}
        alt={character.name}
        onError={handleImageError}
      />
      <h3>{character.name}</h3>
      <p>{character.house ? character.house : 'No House Info'}</p>
    </div>
  );
}

export default CharacterCard;
