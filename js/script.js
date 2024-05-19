const APIUrl = "https://pokeapi.co/api/v2/";

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`${APIUrl}${pokemon}`);
    console.log(APIResponse);
}

