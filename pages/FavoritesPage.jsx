import { useFavorites } from "../src/context/FavoritesContext";
import ExerciseDisplay from "../components/ExerciseDisplay";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <h2 style={{ padding: "20px" }}>No favorites yet.</h2>;
  }

  return (
    <div>
      <h1>Favorite Exercises</h1>
      <ExerciseDisplay exercises={favorites} />
    </div>
  );
}
