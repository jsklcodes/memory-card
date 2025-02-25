import { useEffect, useState } from 'react';

export const GameCard = ({
  name,
  image,
  score,
  setScore,
  bestScore,
  setBestScore,
  shuffleCharacters,
}) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    if (score === 0) {
      setHasBeenClicked(false);
    }
  }, [score]);

  const handleClick = () => {
    if (hasBeenClicked) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    } else {
      setScore(score => score + 1);
      setHasBeenClicked(true);
      shuffleCharacters();
    }
  };

  return (
    <figure className="game-card" onClick={handleClick}>
      <img src={image} alt="" />
      <figcaption className="text-small text-bold">{name}</figcaption>
    </figure>
  );
};
