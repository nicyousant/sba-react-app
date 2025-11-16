import { useState } from "react";

// https://react.dev/learn/state-a-components-memory
// sculpture display example

export default function ExerciseDisplay({ exercises }) {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  if (!exercises || exercises.length === 0) {
    return <div>No exercises available.</div>;
  }

  const workout = exercises[index];

  function next() {
    setIndex((i) => (i + 1) % exercises.length);
    setShowMore(false);
  }

  function prev() {
    setIndex((i) => (i === 0 ? exercises.length - 1 : i - 1));
    setShowMore(false);
  }

  return (
    <div className="container">
      <div>
        <h2>{workout.name}</h2>
        {workout.gifUrl ? (
          <img
            src={workout.gifUrl}
            alt={workout.name}
          />
        ) : (
          <div className="imagePlaceholder">No image</div>
        )}

        <div>
          <strong>Body Part:</strong> {workout.bodyParts || "—"}
        </div>
        <div>
          <strong>Equipment:</strong> {workout.equipments || "—"}
        </div>
                <div><strong>Target Muscles:</strong> {workout.targetMuscles || "—"}</div>

        <button
          onClick={() => setShowMore((s) => !s)}
          className="showMore"
        >
          {showMore ? "Hide instructions" : "Show instructions"}
        </button>

        {showMore && (
          <div className="instructions">
                <p><strong>Instructions:</strong> {workout.instructions || "—"}</p>

          </div>
        )}

        <div className="controls">
          <button onClick={prev}>Previous</button>
          <span>
            {index + 1} / {exercises.length}
          </span>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );
}

