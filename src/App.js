import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="character-list">
        {characters.slice(0, 20).map((character) => (
          <div key={character.id} className="character-card" onClick={() => handleCharacterClick(character)}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
