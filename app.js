const BOTAO = document.getElementById('botao'),
    LISTA = document.getElementById('pokemonLista'),
    LIMITE_URL = 5;
let offset = 0;

const TOTAL_POKEMONS_EXIBIDOS = 151;

function carregarPokemons(LIMITE_URL, offset) {
    pokeAPI.pegarPokemon(LIMITE_URL, offset)
        .then((pokemonLista = []) => {
            LISTA.innerHTML += pokemonLista.map((pokemon) => `
            <a href="pokemon/?id=${pokemon.id}">
            <li class="size-36 flex flex-col justify-between items-center rounded-xl ${pokemon.tipoPrincipal}">
            <h3 class="self-end px-2">#${pokemon.id}</h3>
                <img class="size-20 " src="${pokemon.foto}"
                alt="${pokemon.nome}">
                <h2 class="capitalize text-white bg-black bg-opacity-40 w-full text-center rounded-b-xl">${pokemon.nome}</h2>
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
    else {
        carregarPokemons(LIMITE_URL, offset)
    }
})