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
})