import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Initialize from localStorage if available
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a favorite, avoid duplicates
  function addFavorite(exercise) {
    setFavorites((prev) => {
      if (prev.some((f) => String(f.exerciseId) === String(exercise.exerciseId))) {
        return prev; // already saved
      }
      return [...prev, exercise];
    });
  }

  // Remove a favorite
  function removeFavorite(exerciseId) {
    setFavorites((prev) =>
      prev.filter((f) => String(f.exerciseId) !== String(exerciseId))
    );
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
