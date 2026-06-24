import { PuzzleCard } from "./PuzzleCard";

export function PuzzleBoard({ fragments }) {
  return (
    <div className="puzzle-board">
      {fragments.map((fragment) => (
        <PuzzleCard key={fragment} fragment={fragment} />
      ))}
    </div>
  );
}