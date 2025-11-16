import { useEffect, useState } from "react";
import ExerciseDisplay from "../components/ExerciseDisplay";

export default function ArmExercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function load() {
      const upperRes = await fetch(
        "https://exercisedb-api.vercel.app/api/v1/bodyparts/upper%20arms/exercises?offset=0&limit=100"
      );
            const lowerRes = await fetch(
        "https://exercisedb-api.vercel.app/api/v1/bodyparts/lower%20arms/exercises?offset=0&limit=100"
      );

      const upperData = await upperRes.json();
      const lowerData = await lowerRes.json();

      console.log(upperData)

      const combined = [...upperData.data, ... lowerData.data];

      setExercises(combined);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Arm Exercises</h2>
      <ExerciseDisplay exercises={exercises} />
    </div>
  );
}

