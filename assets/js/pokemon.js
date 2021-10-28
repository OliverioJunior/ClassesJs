"use strict"
class Pokemon {

  constructor(name, abilities,height,baseExperience,sprites){
        
        this._name = name
        this._abilities = abilities
        this._height = height
        this._baseExperience = baseExperience
        this._sprites = sprites 
        
    }
    
    get name() {
    
        return this._capitalize(this._name)
      }
    
      get abilities() {
       
        return this._formatar(this._abilities)
      }
    
      get height() {
        return `${this._height} m`
      }
    
      get baseExperience() {
        return this._baseExperience
      }
    
      get image() {
        return this._sprites
      }
    
      _capitalize(value){
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
      }
     _formatar(value){
       return value.map(i => ` ${this._capitalize(i.ability.name)} `)
     }
}