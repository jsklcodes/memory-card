import { ScoreBar } from './ScoreBar';

export const Header = () => {
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
        <ScoreBar />
      </div>
    </header>
  );
};
