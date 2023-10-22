import './App.css';
import { getPokemon, getPokemonData } from './api';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 24
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon(itensPerPage, itensPerPage*page);
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
  }
  useEffect(() =>{
    fetchPokemons();
  }, [])
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Pokedex pokemons={pokemons} loading={loading} page = {page} totalPages = {totalPages}/>
    </div>
  );
}

export default App;