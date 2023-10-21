import React from "react";
import { useState } from "react";

const Searchbar = () => {
    const [search, setSearch] = useState("")
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        console.log("pokemon: ", search)
    }
    return(
        <div className="searchbarContainer">
            <div className="searchbar">
                <input type="text" placeholder='Buscar Pokémon' onChange={onChangeHandler}/>
            </div>
            <div className="searchbarButton">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;