"use strict"

class PokemonService {
  
    constructor(){
        this._baseUrl = 'https://pokeapi.co/api/v2' 
      };
    getPokemon(name){
      return fetch(`${this._baseUrl}/pokemon/${name}`)
      .then(response => response.json())
      .then(data => data);
    };
     getList() {
        return fetch(`${this._baseUrl}/pokemon/`)
          .then(response => response.json())
          .then(data => data);
      } 


};
