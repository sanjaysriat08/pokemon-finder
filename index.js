async function fetchPokemon() {

    try {

        const inputElement = document.querySelector('#pokemonInput');
        let pokemonInput = inputElement.value.toLowerCase();
        const pokemonDetailsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
        
        if(!pokemonDetailsResponse.ok) {

            throw new Error ("Cannot fetch the resource");
        }
        
        const pokemonDetails = await pokemonDetailsResponse.json();
        const pokemonSprite = pokemonDetails.sprites.front_default;
        const imgPokemon = document.querySelector('#pokemonImage');

        console.log(pokemonDetails);

        imgPokemon.src = pokemonSprite;
        inputElement.value = '';

    }
    catch(error) {

        console.error(error);
        window.alert(error);
    }
}

function enterToFetchPokemon(event){

    if(event.key === 'Enter') {

        fetchPokemon();
    }
}
