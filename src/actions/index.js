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
        this.age = Math.round(Math.random() * (500 - 0) + 0)
        this.mana = Math.round(Math.random() * (10000 - 1000) + 1000)
        this.type = creatureTypes[Math.round(Math.round((Math.random() * 2)))]
    }
    const newCreature = new Creature("")
    return {type: actionTypes.CREATE_NEW_CREATURE, creature : newCreature}
}


export function addNameToNewCreature(name){
    return{type: actionTypes.ADD_NAME_TO_NEW_CREATURE, name :name}
}

export function notifyError(){
    return { type: actionTypes.NOTIFY_ERROR }
}

export function newGame(){
    return { type: actionTypes.NEW_GAME }
}

export function sortByAge(){
    return { type: actionTypes.SORT_BY_AGE }
}

