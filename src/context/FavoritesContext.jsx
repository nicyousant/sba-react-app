import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Initialize from localStorage if available
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });


  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a favorite (if not already in the list)
 function addFavorite(exercise) {
    setFavorites((prev) => {
      if (prev.some((f) => f.exerciseId === exercise.exerciseId)) return prev;
      return [...prev, exercise];
    });
  }

  // Remove a favorite by exerciseId
  function removeFavorite(exerciseId) {
    setFavorites((prev) => prev.filter((f) => f.exerciseId !== exerciseId));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook to access context
export function useFavorites() {
  return useContext(FavoritesContext);
}