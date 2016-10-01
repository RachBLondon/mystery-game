import * as actionTypes from "./actionTypes"

export function showModal(){
    return { type : actionTypes.SHOW_MODAL}
}

export function hideModal(){
    return { type : actionTypes.HIDE_MODAL}
}

export function createNewCreature(){
    const creatureTypes = ['phoenixes', 'medusas', 'hippogriffs']
    function Creature(name, age, mana, type ) {
        this.name = ""
        this.age = Math.random() * (501 - 0) + 0
        this.mana = Math.random() * (10001 - 1000) + 1000
        this.type = creatureTypes[Math.round(Math.round((Math.random() * 2)))]
    }
    const newCreature = new Creature("")

    return {type: actionTypes.CREATE_NEW_CREATURE, creature : newCreature}
}

