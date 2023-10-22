import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const { pokemons, loading } = props;
    return (
        <div>
            <div className="pokedexHeader">
                <h1>Pokédex</h1>
                <div>Paginação</div>
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="pokedexGrid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Pokedex;