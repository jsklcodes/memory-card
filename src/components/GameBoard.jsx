import { GameCard } from './GameCard';

export const GameBoard = () => {
  return (
    <main className="game-board container">
      <GameCard />
      <GameCard />
      <GameCard />
    </main>
  );
};
