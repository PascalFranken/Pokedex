function init(){
    fetchAllPokemonData();   
}

let allPokemon = [];
let currentPokemon = [];

async function fetchAllPokemonData(){
    for (let index = 1; index <=40; index++) {
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const pokemonAsJson = await pokemonData.json();
        allPokemon.push(pokemonAsJson);
    allPokemon = currentPokemon;
    
    }
    renderPokemonCard();
    
    
   
}

function renderPokemonCard(){
    const pokemonCard = document.getElementById('content')
    for (let index = 0; index < currentPokemon.length; index++) {
        let name = currentPokemon[index].name;
        nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);
        img = currentPokemon[index].sprites.other.home.front_default;
        typeOne = currentPokemon[index].types[0].type.name
        // typeTwo = currentPokemon[index].types[1].type.name
        
        pokemonCard.innerHTML += getPokemonTemplate(index);
    }    
}

function dialog(){
    const pokemonName = document.getElementById('pokemonname');
    pokemonName = nameUppercase
}
































function openPokemonCard(){
    const openDialog = document.getElementById('dialog');
    openDialog.showModal();
}

function closeDialogWithButton(){
    const closeDialog = document.getElementById('dialog');
    closeDialog.close();
}

function closeDialogWithBackgroundClick(){
    const closeDialog = document.getElementById('dialog');
    closeDialog.close();
}

function bubblingProtection(event){
    event.stopPropagation();
}

