function getPokemonTemplate(index){
   return /*html*/`
        <button onclick="openPokemonCard()" class="small_pokemon_card">
            <h2>${nameUppercase}</h2>
            <div class="type_and_img_direction">
                <div class="type_direction">
                    <p>${typeOne}</p>
                    
                </div>
                <img class="img_size" src="${img}" alt="">
            </div>
        </button>
    `
}