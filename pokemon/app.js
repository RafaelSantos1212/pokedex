const NOME_DO_POKEMON = document.getElementById("nomeDoPokemon")

let pokemonId = new URLSearchParams(window.location.search).get("id") // comando usado para procurar na url o que está entre parênteses
pokeAPI.pegarPokemon(1, (pokemonId - 1))
    .then((pokemonLista = []) => {
        NOME_DO_POKEMON.innerHTML = pokemonLista[0].nome
    })
