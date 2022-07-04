import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMeal, setFavoriteMeal] = useState([]);

  function addFavorites(id) {
    console.log("Called");
    setFavoriteMeal((currentFav) => [...currentFav, id]);
  }

  function removeFavorites(id) {
    setFavoriteMeal((currentFav) => currentFav.filter((favId) => favId !== id));
  }

  const value = {
    ids: favoriteMeal,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
