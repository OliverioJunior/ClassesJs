class Pokemon {
    construtor(name, abilities,height,baseExperince,sprites){
        this._name = name
        this._abilities = abilities
        this._height= height
        this._baseExperince = baseExperince
        this._sprites = sprites 
    }

    get name() {
        return this._name
    }

    get abilities() {
        return this._abilities
    }

    get height() {
        return this._height
    }

    get baseExperience() {
        return this._baseExperience
    }
}