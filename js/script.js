const APIUrl = "https://pokeapi.co/api/v2/";

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`${APIUrl}${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    
}