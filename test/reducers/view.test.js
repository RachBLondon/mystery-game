import React from 'react'
import {expect} from 'chai'
import reducer from '../../src/reducers/view'
import * as actions from '../../src/actions/actionTypes'

describe('React View Reducer', function () {

    it('SHOW_MODAL', () => {
        const action = { type: actions.SHOW_MODAL }
        const state = reducer({}, action)
        expect(state).to.eql({ displayModal: true })
    })

    it('HIDE_MODAL', () => {
        const action = { type: actions.HIDE_MODAL }
        const state = reducer({}, action)
        expect(state).to.eql({ displayModal: false })
    })

    it('NOTIFY_ERROR', ()=>{
        const action = { type: actions.NOTIFY_ERROR}
        const state = reducer({}, action)
        expect(state).to.eql({nameError :true})
    })

    it('removes error on ADD_NAME_TO_NEW_CREATURE', ()=> {
        const action  = {type: actions.ADD_NAME_TO_NEW_CREATURE}
        const state = reducer({}, action)
        expect(state).to.eql({nameError: false})
    })
})