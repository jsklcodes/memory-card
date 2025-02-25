import { useState } from 'react';
import { Header } from './components/Header';
import { GameBoard } from './components/GameBoard';

export const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <GameBoard
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
};
