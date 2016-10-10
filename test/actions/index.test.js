import React from 'react'
import {expect} from 'chai'

import * as actions from './../../src/actions'
import * as actionTypes from './../../src/actions/actionTypes'

describe("actions", () =>{

    it('showModal returns actionType SHOW_MODAL', ()=>{
        const expectedAction = { type : actionTypes.SHOW_MODAL}
        expect(actions.showModal()).to.be.eql(expectedAction)
    })

    it('hideModal returns actionType HIDE_MODAL', ()=>{
        const expectedAction = { type : actionTypes.HIDE_MODAL}
        expect(actions.hideModal()).to.be.eql(expectedAction)
    })
})
