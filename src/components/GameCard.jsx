export const GameCard = ({ name, image }) => {
  return (
    <picture className="game-card">
      <img src={image} alt="" />
    </picture>
  );
};
