import {
    SHOW_MODAL,
    HIDE_MODAL,
    NOTIFY_ERROR,
    ADD_NAME_TO_NEW_CREATURE,
    SORT_BY_AGE
} from './../actions/actionTypes'


export default function view( state = {}, action) {
    switch(action.type){
        case SHOW_MODAL :
            return Object.assign({}, state, {displayModal :true})
        case HIDE_MODAL :
            return Object.assign({}, state, {displayModal :false})
        case NOTIFY_ERROR:
            return Object.assign({}, state, { nameError : true})
        case ADD_NAME_TO_NEW_CREATURE :
            return Object.assign({}, state, {nameError: false})
        // case SORT_BY_AGE :

        default:
            return state
    }
}

