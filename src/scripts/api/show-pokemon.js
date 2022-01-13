import {fetchAPI} from './fetchAPI.js';
window.addEventListener("load",fetchAPI("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",init));

// function filter(){
// let matchingPokemon = pokemon.pokemon.filter(function(poke){
//     if(poke.name.toLowerCase().search(searchTerm)>-1){
//         return true;
//     }

//     else{
//         return false;
//     }
// })
// } 

function init(data){

    let url_str = window.location.href;
    let url = new URL(url_str);
    let search_params = url.searchParams;
    let poke_ID = search_params.get('id');
    let pokemon = data.pokemon[poke_ID-1];
    console.log(pokemon);

    // console.log(data);

    

    document.getElementById("name1").innerHTML = pokemon.name;
    document.getElementById("name2").innerHTML = pokemon.name;
    document.getElementById("img").src = pokemon.img;
    document.getElementById("height").innerHTML = pokemon.height;
    document.getElementById("weight").innerHTML = pokemon.weight;
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("weaknesses").innerHTML = pokemon.weaknesses;
 
    document.getElementById("img").innerHTML = pokemon.img;

    console.log(pokemon.img);
}