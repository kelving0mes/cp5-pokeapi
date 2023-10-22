import './App.css';
import { getPokemon, getPokemonData } from './api';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import React from 'react';
import { useEffect, useState } from 'react';
import { FavoriteProvider } from './contexts/favoritesContext';

const favoritesKey = "f"
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const itensPerPage = 24
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  };
  const loadFavoritePokemons = () =>{
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey))
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons();
  }, [])
  useEffect(() => {
    fetchPokemons();
  }, [page])

const updateFavoritePokemon = (name) => {
  const updateFavorites = [...favorites]
  const favoriteIndex = favorites.indexOf(name)
  if (favoriteIndex >= 0) {
    updateFavorites.slice(favoriteIndex, 1)
  } else {
    updateFavorites.push(name)
  }
  window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
  setFavorites(updateFavorites);
}

  return (
    <FavoriteProvider
      value={{ favoritePokemons: favorites, updateFavoritePokemon: updateFavoritePokemon }}>
      <div>
        <Navbar />
        <Searchbar />
        <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </FavoriteProvider>
  );
}

export default App;