import {
    CREATE_NEW_CREATURE,
    ADD_NAME_TO_NEW_CREATURE,
    NEW_GAME
} from './../actions/actionTypes'

import {creatures} from './../dummyData'

export default function view(state = [], action){
    switch(action.type){
        case CREATE_NEW_CREATURE:
            state.push(action.creature)
            return state
        case ADD_NAME_TO_NEW_CREATURE:
            const newState = state
            newState[newState.length -1]['name'] = action.name
            return newState
        case NEW_GAME :
            return []
        default:
            return state
    }
}