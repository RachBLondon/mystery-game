import { combineReducers } from 'redux'
import view from './view'
import creatures from './creatures'

const rootReducer = combineReducers({
    view,
    creatures
})

export default rootReducer
