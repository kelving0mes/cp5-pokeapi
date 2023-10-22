import React, { useContext } from "react";
import FavoritesContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemon} = useContext(FavoritesContext)
    const {pokemon} = props
    const onStarClick = () =>{
        updateFavoritePokemon(pokemon.name);
    }
    const star = favoritePokemons.includes(pokemon.name) ? "🌟" : "⭐";
    return(
    <div className="pokemonCard">
        <div className="pokemonImageContainer">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemonImage"/>
        </div>
        <div className="cardBody">
            <div className="cardTop">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="cardBottom">
                <div className="pokemonType">Tipo:
                    {pokemon.types.map((type, index) => {
                        return(
                            <div key={index} className="pokemonTypeText">{type.type.name}</div>
                        )
                    })}
                </div>
                <div className="pokemonAbility"> Habilidades:
                    {pokemon.abilities.map((abilities, index) => {
                        return(
                            <div key={index} className="pokemonAbilityText">{abilities.ability.name}</div>
                        )
                    })}
                </div>
                <button className="pokemonStarButton" onClick={onStarClick}>
                    {star}
                </button>
            </div>
        </div>
    </div>)
}

export default Pokemon;