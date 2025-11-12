import { useState, useEffect } from 'react'
import './App.css'
import ExerciseDisplay from "../components/ExerciseDisplay";

export default function App() {
   
 // State to hold exercise data
  const [exercise, setExercise] = useState(null);

  // Function to get exercises
  const getExercises = async() => {
	try {
    
		const response = await fetch(
			`https://exercisedb-api-v1-dataset1.p.rapidapi.com/api/v1/exercises/bodyparts?bodyParts=Chest%2CShoulders&limit=10`, {
      method: "GET",
      headers: {
        'x-rapidapi-key': '251bf00412msh556a4879c5f58eep1f242fjsn44e1b8e67044',
		    'x-rapidapi-host': 'exercisedb-api-v1-dataset1.p.rapidapi.com'
      }
      }
		);
		const data = await response.json();
    console.log("success:", data)
		setExercise(data.data);
	} catch(e) {
		console.error(e)
	}
}



// This will run on the first render but not on subsquent renders
  useEffect(() => {
    // let movie = Math.floor(Math.random() * 100)
    getExercises();
  }, []);



  // We pass the getMovie function as a prop called moviesearch
   // We pass movie as props to movie display
  return (
    <div className="App">
      <h1>Fitness App</h1>
      {/* <Form moviesearch={getMovie} /> */}
      <ExerciseDisplay  exercise={exercise}/>
    </div>
  );
}
