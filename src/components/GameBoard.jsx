import { useState, useEffect } from 'react';
import { GameCard } from './GameCard';

export const GameBoard = ({ score, setScore, bestScore, setBestScore }) => {
  const [characters, setCharacters] = useState([]);

  const shuffleCharacters = () => characters.sort(() => Math.random() - 0.5);
  shuffleCharacters();

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10'
      );
      const data = await response.json();
      const mappedData = data.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));

      setCharacters(mappedData);
    };

    fetchCharacters();
  }, []);

  return (
    <main className="game-board container">
      {characters.map(character => (
        <GameCard
          key={character.id}
          {...character}
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          shuffleCharacters={shuffleCharacters}
        />
      ))}
    </main>
  );
};
