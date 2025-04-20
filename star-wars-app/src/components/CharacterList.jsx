import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import { fetchHPCharacters } from '../services/hpApi';

function CharacterList({ onCharacterClick }) {
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHPCharacters();
        setAllCharacters(data);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, []);

  // Calculate the characters for the current page
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = allCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const totalPages = Math.ceil(allCharacters.length / charactersPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="character-grid">
        {currentCharacters.map((character, index) => (
          <CharacterCard
            key={`${character.name}-${index}`}
            character={character}
            onClick={() => onCharacterClick(character)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CharacterList;
