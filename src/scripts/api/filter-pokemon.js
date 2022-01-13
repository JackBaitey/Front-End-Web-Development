let pokemon;

function setPokemon(data){
    pokemon = data;
}

function searchPokemon(searchTerm){
    console.log(pokemon.pokemon[1]);
    console.log(searchTerm);

    let matchingPokemon = pokemon.pokemon.filter(function(poke){
        if(poke.name.toLowerCase().search(searchTerm)>-1){
            return true;
        }
        else{
            return false;
        }
    })
    return matchingPokemon;
}

export {setPokemon, searchPokemon};