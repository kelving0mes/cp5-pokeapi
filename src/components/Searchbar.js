import { useState } from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState()
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0 ){
            onSearch(undefined)
        }
    }
    const onButtonClickHandler = () => {
        onSearch(search)
    }
    return (
        <div className="searchbarContainer">
            <div className="searchbar">
                <input placeholder='Buscar Pokémon' onChange={onChangeHandler} />
            </div>
            <div className="searchbarButton">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}
export default Searchbar;