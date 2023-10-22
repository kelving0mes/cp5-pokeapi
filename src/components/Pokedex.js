import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const { pokemons, loading , page, totalPages} = props;
    const onPreviousClickHandler = () => {
        console.log("oi");
    }
    const onNextClickHandler = () => {
        console.log("oi");
    }
    return (
        <div>
            <div className="pokedexHeader">
                <h1>Pokédex</h1>
                <Pagination
                    page = {page+1}
                    totalPages = {totalPages}
                    onPreviousClick = {onPreviousClickHandler}
                    onNextClick = {onNextClickHandler}
                />
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