import {fetchAPI} from './fetchAPI.js';
import {setPokemon, searchPokemon} from './filter-pokemon.js';
import {validSearchTerm} from './validationFncs.js';

let pokemonList;
let searchBtn;
let searchBox;

// function fetchAPI(){
// 	fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		displayResults(json)
// 	});
// }
// window.onload = doSearch();

window.addEventListener("load",fetchAPI("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",init));
function init(data){
    setPokemon(data);
    pokemonList = document.querySelector("#pokemon-list")
    searchBtn = document.querySelector("#searchBtn");
    searchBox = document.querySelector("#searchBox");
    searchBtn.addEventListener("click",doSearch);
    searchBox.addEventListener("keyup",doSearch);
    startList(data);
}

function startList(data){
    const pokemonFragment = document.createDocumentFragment();
    data.pokemon.forEach(function(poke){
        const newA = document.createElement("a");
        newA.textContent = poke.name;
        newA.href = "../pokemon?id=" + poke.id;
        const br = document.createElement("br");
        pokemonFragment.appendChild(newA);
        pokemonFragment.appendChild(br);
    })
    
    pokemonList.appendChild(pokemonFragment);  
}

function doSearch(){
    clearSearchResults();
    const searchTerm = searchBox.value.toLowerCase();
    const matchingPokemon = searchPokemon(searchTerm);
    console.log(matchingPokemon);
    displayResults(matchingPokemon);
  
}

function clearSearchResults(){
    while(pokemonList.firstChild){
	    pokemonList.removeChild(pokemonList.firstChild);
	}
}

function displayResults(matchingPokemon){
    const pokemonFragment = document.createDocumentFragment();
    matchingPokemon.forEach(function(poke){
        const newA = document.createElement("a");
        newA.textContent = poke.name;
        newA.href = "../pokemon?id=" + poke.id;
        const br = document.createElement("br");
        pokemonFragment.appendChild(newA);
        pokemonFragment.appendChild(br);
    })
    
    pokemonList.appendChild(pokemonFragment);    
}
    




