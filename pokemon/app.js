const NOME_DO_POKEMON = document.getElementById("nomeDoPokemon"),
    ID_DO_POKEMON = document.getElementById("idDoPokemon"),
    TIPO_DO_POKEMON = document.getElementById("tipoDoPokemon"),
    TIPO_PRINCIPAL_DO_POKEMON = document.getElementById("tipoPrincipalDoPokemon"),
    HP_DO_POKEMON = document.getElementById("hpDoPokemon"),
    ATAQUE_DO_POKEMON = document.getElementById("ataqueDoPokemon"),
    ATAQUE_ESPECIAL_DO_POKEMON = document.getElementById("ataqueEspecialDoPokemon"),
    DEFESA_DO_POKEMON = document.getElementById("defesaDoPokemon"),
    DEFESA_ESPECIAL_DO_POKEMON = document.getElementById("defesaEspecialDoPokemon"),
    VELOCIDADE_DO_POKEMON = document.getElementById("velocidadeDoPokemon"),
    TOTAL_DO_POKEMON = document.getElementById("totalDoPokemon"),
    ALTURA_DO_POKEMON = document.getElementById("alturaDoPokemon"),
    PESO_DO_POKEMON = document.getElementById("pesoDoPokemon"),
    HABILIDADES_DO_POKEMON = document.getElementById("habilidadesDoPokemon");

let pokemonId = new URLSearchParams(window.location.search).get("id") // comando usado para procurar na url o que está entre parênteses
pokeAPI.pegarPokemon(1, (pokemonId - 1))
    .then((pokemonLista = []) => {
        ID_DO_POKEMON.innerHTML = pokemonLista[0].id
        NOME_DO_POKEMON.innerHTML = pokemonLista[0].nome
        HP_DO_POKEMON.innerHTML = pokemonLista[0].stats.saude
        ATAQUE_DO_POKEMON.innerHTML = pokemonLista[0].stats.ata
        ATAQUE_ESPECIAL_DO_POKEMON.innerHTML = pokemonLista[0].stats.ataqueEspecial
        DEFESA_DO_POKEMON.innerHTML = pokemonLista[0].stats.def
        DEFESA_ESPECIAL_DO_POKEMON.innerHTML = pokemonLista[0].stats.defesaEspecial
        VELOCIDADE_DO_POKEMON.innerHTML = pokemonLista[0].stats.velocidade
        TOTAL_DO_POKEMON.innerHTML = pokemonLista[0].stats.total
        ALTURA_DO_POKEMON.innerHTML = pokemonLista[0].altura
        PESO_DO_POKEMON.innerHTML = pokemonLista[0].peso

        if (pokemonLista[0].tipos.length === 1) {
            TIPO_DO_POKEMON.innerHTML = `Tipo: ${pokemonLista[0].tipos} <br>`
        } else {
            TIPO_DO_POKEMON.innerHTML = `Tipo 1: ${pokemonLista[0].tipos[0]} <br> Tipo 2: ${pokemonLista[0].tipos[1]}`
            TIPO_PRINCIPAL_DO_POKEMON.innerHTML = `Tipo Principal: ${pokemonLista[0].tipos[0]} <br> <br>`
        }

        if (pokemonLista[0].habilidades.length === 1) {
            HABILIDADES_DO_POKEMON.innerHTML = "Habilidade: " + pokemonLista[0].habilidades
        } else {
            HABILIDADES_DO_POKEMON.innerHTML = "Habilidade 1: " + pokemonLista[0].habilidades[0] + "<br> Habilidade 2: " + pokemonLista[0].habilidades[1]
        }
    })
