const elSelect = document.getElementById("select-options")


function getValues(value) {
    
    const service = new PokemonService()         
   service.getPokemon(value).then(response => {
    const { name, abilities, height, base_experience, sprites } = response
    const pokemon = new Pokemon(
      response.name,
      response.abilities,
      response.height,
      response.base_experience
      ,response.sprites)
    setValues(pokemon)
  })
    
}

function setValues(pokemon) {
    const elPokemonName = document.getElementById("pokemon-name")
    const elPokemonAbilities = document.getElementById("pokemon-abilities")
    const elPokemonHeight = document.getElementById("pokemon-height")
    const elPokemonBaseExperience = document.getElementById("pokemon-experience")
    const elPokemonSprites = document.getElementById("pokemon-image")
    
    elPokemonName.innerHTML = pokemon ? pokemon.name : '-'
    elPokemonAbilities.innerHTML = pokemon ? pokemon.abilities : '-'
    elPokemonHeight.innerHTML = pokemon ? pokemon.height : '-'
    elPokemonBaseExperience.innerHTML = pokemon ? pokemon.baseExperience : '-'
    elPokemonSprites.src = pokemon ? pokemon.image.front_default : "https://via.placeholder.com/150x150"
}

 function setOptions(results) {
     results.map(result => {
     elSelect.add(new Option(result.name,result.name), null);
  })
}
  

function loadOptions(){
    const service = new PokemonService()
    service.getList().then(response => {
      const { results } = response
      console.log(response)
      setOptions(results)
    })
}




elSelect.addEventListener("change", function (e) {

        const value = e.target.value
        value ? getValues(value) : setValues()
        
})


loadOptions()