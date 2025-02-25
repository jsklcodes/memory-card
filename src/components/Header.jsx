import { ScoreBar } from './ScoreBar';

export const Header = ({ score, bestScore }) => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <h1>Memory Card</h1>
          <p className="text-small">
            The rule of the game is simple: you must not click on the same image
            twice.
          </p>
        </div>
        <ScoreBar score={score} bestScore={bestScore} />
      </div>
    </header>
  );
};
