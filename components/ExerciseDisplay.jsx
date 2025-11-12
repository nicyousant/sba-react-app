export default function ExerciseDisplay({ exercise }){
  // Function to return loaded JSX
  const loaded = () => {
    return (
       <div>
          {exercise.map((item) => (
            <div key={item.exerciseId}>
              <h3>{item.name}</h3>
              <img src={item.imageUrl} alt={item.name} width="200" />
              <p><strong>Body Part:</strong> {item.bodyParts}</p>
              <p><strong>Equipment:</strong> {item.equipments}</p>
              <p><strong>Target:</strong> {item.targetMuscles}</p>
              <p><strong>Difficulty:</strong> {item.difficulty}</p>
            </div>
          ))}
        </div>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>No Exercises to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return exercise ? loaded() : loading();
}