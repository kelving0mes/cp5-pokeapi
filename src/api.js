export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = fetch(url)
        return (await response).json()
    } catch (error) {
        console.log("error: ", error)
    }
}
export const getPokemon = async (limit, offset) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = fetch(url)
        return (await response).json()
    } catch (error) {
        console.log("error: ", error)
    }
}
export const getPokemonData = async (url) => {
    try {
        const response = fetch(url)
        return (await response).json()
    } catch (error) {
        console.log("error: ", error)
    }
}
