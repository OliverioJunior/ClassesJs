class PokemonService {
    construtor(){
        this.baseUrl = "https://pokeapi.co/api/v2/"
    }

    getPokemon(name){
        return fetch(`${this.baseUrl}/pokemon/${name}`)
        .then(response => response.json())
        .then(data=> data)
    }



}