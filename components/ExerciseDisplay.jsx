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
    <div>
      <div>
        <h3>{workout.name}</h3>
        {workout.gifUrl ? (
          <img
            src={workout.gifUrl}
            alt={workout.name}
          />
        ) : (
          <div className="imagePlaceholder">No image</div>
        )}

        <p>
          <strong>Body Part:</strong> {workout.bodyParts || "—"}
        </p>
        <p>
          <strong>Equipment:</strong> {workout.equipments || "—"}
        </p>
                <p><strong>Target Muscles:</strong> {workout.targetMuscles || "—"}</p>

        <button
          onClick={() => setShowMore((s) => !s)}
          className="showMore"
        >
          {showMore ? "Hide instructions" : "Show instructions"}
        </button>

        {showMore && (
          <div className="instructions">
                    <strong>Instructions:</strong>
    {/* <ul>
      {workout.instructions?.map((step, i) => (
        <li key={i} className="instructionItem">{step}</li>
      ))}
    </ul> */}
{/* 
    <ul className="instructions-list">
  {workout.instructions.map((step, i) => (
    <li key={i} className="instruction-step">
      <span className="step-number">{i + 1}</span>
      <span className="step-text">{step}</span>
    </li>
  ))}
</ul> */}

<ul className="instructions-list">
  {workout.instructions.map((step, i) => {
    // Remove any "Step:" prefix from API text
    const cleanedStep = step.replace(/^Step:\s*\d+\s*/i, "");
    return (
      <li key={i} className="instruction-step">
        <span className="step-number">{i + 1}</span>
        <span className="step-text">{cleanedStep}</span>
      </li>
    );
  })}
</ul>


          </div>
        )}

        <div className="controls">
          <button onClick={prev} className="controlBtn">Previous</button>
          <span className="count">
            {index + 1} / {exercises.length}
          </span>
          <button onClick={next} className="controlBtn">Next</button>
        </div>
      </div>
    </div>
  );
}

