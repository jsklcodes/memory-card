export const ScoreBar = ({ score, bestScore }) => {
  return (
    <div className="score-bar">
      <div>
        <span className="text-bold">Score:</span> {score}
      </div>
      <div>
        <span className="text-bold">Best Score:</span> {bestScore}
      </div>
    </div>
  );
};
