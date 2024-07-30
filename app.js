const BOTAO = document.getElementById('botao'),
    LISTA = document.getElementById('pokemonLista'),
    LIMITE_URL = 10;
let offset = 0;

const TOTAL_POKEMONS_EXIBIDOS = 151;

function carregarPokemons(LIMITE_URL, offset) {
    pokeAPI.pegarPokemon(LIMITE_URL, offset)
        .then((pokemonLista = []) => {
            LISTA.innerHTML += pokemonLista.map((pokemon) => `
            <a href="pokemon/?id=${pokemon.id}">
            <li class="pokemon-card ${pokemon.tipoPrincipal}">
                <img class="pokemonFoto" src="${pokemon.foto}"
                alt="${pokemon.nome}">
                <h2>${pokemon.nome} - ID: ${pokemon.id}</h2>
                <p>Altura: ${pokemon.altura}<p>
                <p>Peso: ${pokemon.peso}<p>
                <p>Habilidades: ${pokemon.habilidades}<p>
                <p>Tipo: ${pokemon.tipos}</p>
                <p>${pokemon.stats.total}<p>
            </li>
            </a>
            `).join("")
        })
}

carregarPokemons(LIMITE_URL, offset);

BOTAO.addEventListener("click", () => {
    offset += LIMITE_URL
    const POKEMONS_EXIBIDOS = LIMITE_URL + offset,
    NOVOS_POKEMONS = TOTAL_POKEMONS_EXIBIDOS - offset;

    if (POKEMONS_EXIBIDOS >= TOTAL_POKEMONS_EXIBIDOS) {
        carregarPokemons(NOVOS_POKEMONS, offset)
        BOTAO.style.display = "none"
    }
else{
    carregarPokemons(LIMITE_URL, offset)
}})