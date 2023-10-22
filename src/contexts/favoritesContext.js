import React from "react";

const FavoritesContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemon: (id) => null
});

export const FavoriteProvider = FavoritesContext.Provider;

export default FavoritesContext;