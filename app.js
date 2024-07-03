let botao = document.getElementById('botao')
let lista = document.getElementById('pokemonLista'),
limiteURL = 10,
limiteOffset = 0;

pokeAPI.pegarPokemon(limiteURL, limiteOffset) //
.then((pokemonLista = []) => {
    lista.innerHTML += pokemonLista.map((pokemon) => `<li>${pokemon.nome}</li>`).join("")
})