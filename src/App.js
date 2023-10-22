import './App.css';
import { getPokemon } from './api';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemon();
      setPokemons(result);
      setLoading(false);
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
      <Pokedex pokemons={pokemons.result} loading={loading}/>
    </div>
  );
}

export default App;