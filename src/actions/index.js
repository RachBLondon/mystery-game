import * as actionTypes from "./actionTypes"

export function showModal(){
    return { type : actionTypes.SHOW_MODAL}
}

export function hideModal(){
    return { type : actionTypes.HIDE_MODAL}
}


export function createNewCreature(){

    function Creature(name, age, mana ) {
        this.name = name
        this.age = Math.random() * (501 - 0) + 0
        this.mana = Math.random() * (10001 - 1000) + 1000
    }
    const newCreature = new Creature("test")

    return {type: actionTypes.CREATE_NEW_CREATURE, creature : newCreature}
}

