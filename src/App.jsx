import { useEffect, useState } from "react";
import ExerciseDisplay from "../components/ExerciseDisplay";
import "./App.css";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate} from "react-router-dom";
import ChestExercises from "../pages/ChestExercises";
import BackExercises from "../pages/BackExercises";
import ArmExercises from "../pages/ArmExercises";
import ShoulderExercises from "../pages/ShoulderExercises";
import NeckExercises from "../pages/NeckExercises";
import WaistExercises from "../pages/WaistExercises";
import LegExercises from "../pages/LegExercises";
import CardioExercises from "../pages/CardioExercises";
import FavoritesPage from "../pages/FavoritesPage";


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
    <div >
      <Navbar />
      

      <Routes>

                {/* Within the element, you render html or another component */}
                <Route path="/" element={<div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><ExerciseDisplay exercises={exercises} /></div>} />
                           <Route
                    path="/arms"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><ArmExercises /></div>}
                />
                    <Route
                    path="/back"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><BackExercises /></div> }
                />
                  <Route
                    path="/cardio"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><CardioExercises /></div> }
                />
                <Route
                    path="/chest"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><ChestExercises /></div> }
                />
                                 <Route
                    path="/legs"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><LegExercises /></div>}
                />
     
                           <Route
                    path="/neck"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><NeckExercises /></div>}
                />
                    <Route
                    path="/shoulder"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><ShoulderExercises /></div>}
                />
                              <Route
                    path="/waist"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><WaistExercises /></div>}
                />
                
             <Route
                    path="/favorites"
                    element={ <div className="container"><h1><img src="exercise_bl.svg"/> Fitness App <img src="exercise_bl.svg"/></h1><FavoritesPage /></div>}
                />
           
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
      
    </div>
  );
}