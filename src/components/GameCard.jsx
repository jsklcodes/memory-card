export const GameCard = ({ name, image }) => {
  return (
    <figure className="game-card">
      <img src={image} alt="" />
      <figcaption className="text-small text-bold">{name}</figcaption>
    </figure>
  );
};
