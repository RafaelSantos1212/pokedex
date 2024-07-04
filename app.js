let botao = document.getElementById('botao')
let lista = document.getElementById('pokemonLista'),
    limiteURL = 2,
    limiteOffset = 0;

pokeAPI.pegarPokemon(limiteURL, limiteOffset)
    .then((pokemonLista = []) => {
        lista.innerHTML += pokemonLista.map((pokemon) => `<li>ID: ${pokemon.id} / ${pokemon.nome} / ${pokemon.altura}cm / ${pokemon.foto} / ${pokemon.habilidades} ${pokemon.peso}</li>`).join("")
    })

botao.addEventListener("click", () => {
    limiteOffset += limiteURL

    pokeAPI.pegarPokemon(limiteURL, limiteOffset)
        .then((pokemonLista = []) => {
            lista.innerHTML += pokemonLista.map((pokemon) => `<li>ID: ${pokemon.id} / ${pokemon.nome} / ${pokemon.altura}cm / ${pokemon.foto} / ${pokemon.habilidades} ${pokemon.peso}</li>`).join("")
        })
})