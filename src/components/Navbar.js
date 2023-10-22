import { useContext } from "react";
import React from "react";
import FavoritesContext from "../contexts/favoritesContext";

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoritesContext);
    return (
        <nav>
            <div>
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                    alt="PokeApi Logo" className="navbarImage" />
            </div>
            <div>{favoritePokemons.length} ⭐</div>
        </nav>
    );
};

export default Navbar;
