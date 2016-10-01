import {
    SHOW_MODAL,
    HIDE_MODAL
} from './../actions/actionTypes'


export default function view( state = {}, action) {
    switch(action.type){
        case SHOW_MODAL :
            return Object.assign({}, state, {displayModal :true})

        case HIDE_MODAL :
            return Object.assign({}, state, {displayModal :false})
        default:
            return state
    }
}

