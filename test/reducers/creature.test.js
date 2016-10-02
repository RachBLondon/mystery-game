import React from 'react'
import {expect} from 'chai'
import reducer from '../../src/reducers/creatures'
import * as actions from '../../src/actions/actionTypes'

describe('Creature Reducer', function () {

    it('CREATE_NEW_CREATURE', () => {
        const action = {
            type: actions.CREATE_NEW_CREATURE,
            creature: {
                name: 'Chris',
                age: 29,
                mana: 2724,
                type: "hippogriffs"
            }
        }
        const state = reducer([], action)
        expect(state).to.eql([
            {
                name: 'Chris',
                age: 29,
                mana: 2724,
                type: "hippogriffs"
            }])
    })

    it('ADD_NAME_TO_NEW_CREATURE', ()=>{
        const action = {
            type: actions.ADD_NAME_TO_NEW_CREATURE,
            name: 'Fido'
        }
        const state = reducer([ {
            name: '',
            age: 29,
            mana: 2724,
            type: "hippogriffs"
        }], action)
        expect(state).to.eql(
            [{
                name: 'Fido',
                age: 29,
                mana: 2724,
                type: "hippogriffs"
            }]
        )
    })

    it('NEW_GAME', ()=>{
        const action = {type: actions.NEW_GAME}
        const state = reducer([], action)
        expect(state).to.eql([])
    })

    it('SORT_BY', ()=>{
        const action = {type: actions.SORT_BY, key : 'age'}
        const state = reducer (   [
            {
                name: 'Freddie',
                age: 479,
                mana: 2724,
                type: "hippogriffs"
            },
            {
                name: 'Fido',
                age: 29,
                mana: 2724,
                type: "hippogriffs"
            }, ], action)
        expect(state).to.eql([
            {
                name: 'Fido',
                age: 29,
                mana: 2724,
                type: "hippogriffs"
            }, {
                name: 'Freddie',
                age: 479,
                mana: 2724,
                type: "hippogriffs"
            }])
    })
})