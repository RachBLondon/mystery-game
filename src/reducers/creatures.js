import { CREATE_NEW_CREATURE} from './../actions/actionTypes'

import {creatures} from './../dummyData'

export default function view(state = creatures, action){
    switch(action.type){
        case CREATE_NEW_CREATURE:
            state.push(action.creature)
            return state
        default:
            return state
    }
}