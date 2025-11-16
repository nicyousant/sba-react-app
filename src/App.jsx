import { useEffect, useState } from "react";
import ExerciseDisplay from "../components/ExerciseDisplay";
import "./App.css";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate} from "react-router-dom";
import ChestExercises from "../pages/ChestExercises";
import BackExercises from "../pages/BackExercises";
import LowerArmExercises from "../pages/LowerArmExercises";
import UpperArmExercises from "../pages/UpperArmExercises";
import ShoulderExercises from "../pages/ShoulderExercises";
import NeckExercises from "../pages/NeckExercises";


export default function App() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExercises() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://exercisedb-api.vercel.app/api/v1/exercises?offset=0&limit=100&search=all&sortBy=targetMuscles&sortOrder=desc");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setExercises(data.data);
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    }
    fetchExercises();
  }, []);

  if (loading) return <div style={{padding:20}}>Loading exercises…</div>;
  if (error) return <div style={{padding:20, color:"red"}}>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <h1>Fitness App</h1>

      <Routes>
                {/* Within the element, you render html or another component */}
                <Route path="/" element={<ExerciseDisplay exercises={exercises} />} />
                    <Route
                    path="/back"
                    element={ <BackExercises />}
                />
                <Route
                    path="/chest"
                    element={ <ChestExercises />}
                />
                 <Route
                    path="/lower-arm"
                    element={ <LowerArmExercises />}
                />
                       <Route
                    path="/upper-arm"
                    element={ <UpperArmExercises />}
                />
                           <Route
                    path="/neck"
                    element={ <NeckExercises />}
                />
                    <Route
                    path="/shoulder"
                    element={ <ShoulderExercises />}
                />
                

           
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
      
    </div>
  );
}