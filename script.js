function init(){
    fetchAllPokemonData();   
}

const allPokemon = [];

async function fetchAllPokemonData(){
    const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    const pokemonAsJson = await pokemonData.json();
    allPokemon.push(pokemonAsJson);
    renderPokemonCard();
}

function renderPokemonCard(){
    const pokemonCard = document.getElementById('content')
    for (let index = 0; index < allPokemon[0].results.length; index++) {
        pokemonCard.innerHTML += getPokemonTemplate(0);
    }    
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

