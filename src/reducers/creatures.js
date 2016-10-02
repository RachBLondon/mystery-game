import {
    CREATE_NEW_CREATURE,
    ADD_NAME_TO_NEW_CREATURE,
    NEW_GAME,
    SORT_BY_AGE,
    SORT_BY_MANA,
    SORT_BY_TIME
} from './../actions/actionTypes'

import {creatures} from './../dummyData'

function sortByValue(value, array){
    return array.sort(function(a, b) {
        var nameA = a[value];
        var nameB = b[value];
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
}

export default function view(state = [], action){
    switch(action.type){
        case CREATE_NEW_CREATURE:
            const stateWithNewCreature = state.concat(action.creature)
            return stateWithNewCreature
        case ADD_NAME_TO_NEW_CREATURE:
            const newState = state
            newState[newState.length -1]['name'] = action.name
            return newState
        case NEW_GAME :
            return []
        case SORT_BY_AGE:
            return Object.assign([], sortByValue('age', state))
        default:
            return state
    }
}