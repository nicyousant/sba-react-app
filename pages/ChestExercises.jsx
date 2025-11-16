import { useEffect, useState } from "react";
import ExerciseDisplay from "../components/ExerciseDisplay";

export default function ChestExercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://exercisedb-api.vercel.app/api/v1/bodyparts/chest/exercises?offset=0&limit=100"
      );
      const data = await res.json();
      setExercises(data.data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Chest Exercises</h2>
      <ExerciseDisplay exercises={exercises} />
    </div>
  );
}

