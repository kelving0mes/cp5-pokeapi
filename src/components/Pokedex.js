import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = (props) => {
    const { pokemons, loading , page, setPage, totalPages} = props;
    const onPreviousClickHandler = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }
    const onNextClickHandler = () => {
        if(page < totalPages-1) {
            setPage(page + 1)
        }
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