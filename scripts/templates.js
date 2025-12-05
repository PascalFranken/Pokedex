function getPokemonTemplate(index){
   return /*html*/`
        <button onclick="openPokemonCard()" class="small_pokemon_card">
            <h2>${currentPokemon[index].name}</h2>
            <div class="type_and_img_direction">
                <div class="type_direction">
                    <p>type1</p>
                    <p>type2</p>
                </div>
                <img class="img_size" src="./assets/img/header_logo.png" alt="">
            </div>
        </button>
    `
}