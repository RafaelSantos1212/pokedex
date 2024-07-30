const pokeAPI = {};

function converterPokemon(pokemonJson) {
    const pokemon = new Pokemon() // a const pokemon é uma istância da classe pokemon, isso serve pra facilitar a maneira de chamar o pokemon
    pokemon.nome = pokemonJson.name //  pokemon.nome vira o nome do pokemonJson(os pokemons da url)
    pokemon.id = pokemonJson.id
    pokemon.altura = pokemonJson.height
    pokemon.foto = pokemonJson.sprites.other.dream_world.front_default // *
    pokemon.habilidades = pokemonJson.abilities.map((index) => index.ability.name)
    pokemon.peso = pokemonJson.weight
    pokemon.stats.saude = pokemonJson.stats[0].base_stat
    pokemon.stats.ata = pokemonJson.stats[1].base_stat
    pokemon.stats.def = pokemonJson.stats[2].base_stat
    pokemon.stats.ataqueEspecial = pokemonJson.stats[3].base_stat
    pokemon.stats.defesaEspecial = pokemonJson.stats[4].base_stat
    pokemon.stats.velocidade = pokemonJson.stats[5].base_stat
    pokemon.stats.total = pokemon.stats.saude + pokemon.stats.ata + pokemon.stats.def + pokemon.stats.ataqueEspecial + pokemon.stats.defesaEspecial + pokemon.stats.velocidade
    pokemon.tipos = pokemonJson.types.map((index) => index.type.name); // 
    pokemon.tipoPrincipal = pokemon.tipos[0]
    return pokemon //return é necessário para que o pokemon exista
}

pokeAPI.pegarInformacaoPokemon = (pokemon) => {
    return fetch(pokemon.url) // return para pegar apenas o iten url da arrayPokemons, a array do meu código foi criada no map
        .then((resposta) => resposta.json()) // transforma o fetch do url em objeto, agora a url é viável
        .then(converterPokemon)
}

pokeAPI.pegarPokemon = (limite = 10, offset = 0) => { //pegarPokemon = método (função dentro de um objeto) | (limite=10, offset=0) = são valores pré-defenidos, mas que podem ser alterados

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}` // troquei o valor por variáveis para facilitar a manipulação
    return fetch(url) // return é necessário para que o fetch exista e, com ele, o código finaliza naquela linha | fetch= URL do site pokemonAPI
        .then((resposta) => resposta.json()) //then = manipula a última linha fetch(URL) e depois dele vem uma função anônima (resposta) | json = ferramenta que traz o objeto da resposta que quero
        .then((json) => json.results)
        .then((arrayPokemons) => arrayPokemons.map(pokeAPI.pegarInformacaoPokemon))// results tem dez itens, map = mapea esses itens dentro da array, preciso dele depois de criar a array.
        .then((arrayDetalhesPokemon) => Promise.all(arrayDetalhesPokemon)) // vai descriptografar o código, ele promete que só vai executar se todas informações forem recebidas com sucesso
}
