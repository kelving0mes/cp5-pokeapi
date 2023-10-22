import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
    const [pokemon, setPokemon] = useState()
    const [search, setSearch] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    return (
        <div>
            <div className="searchbarContainer">
                <div className="searchbar">
                    <input placeholder='Buscar Pokémon' onChange={onChangeHandler} />
                </div>
                <div className="searchbarButton">
                    <button onClick={onButtonClickHandler}>Buscar</button>
                </div>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Número na Pokédex: {pokemon.id}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar;