import { Header } from './components/Header';
import { GameBoard } from './components/GameBoard';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <GameBoard />
    </div>
  );
};
