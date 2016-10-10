import React from 'react'
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'
import Creature from './../../src/components/game/Creature'

describe('<Creature />', ()=>{
    let wrapper
    let status
    const fakeCreature = {
        age : 21,
        mana : 1000,
        type : 'phoenixes'
    }

    //These functions have been created to mock the correct functions being run creature onClick
    // Could be improved if they tested expected changes in DOM
    function setFree(){
        status = "setFree"
    }

    function finishSettingFree() {
        status = "finished settingFree"
    }

    it('picks correct image', ()=> {
        console.log(Creature)


        wrapper = mount(<Creature
                creature={fakeCreature}
        />)
        console.log(wrapper)
        expect(wrapper.containsAnyMatchingElements([<img src="./../../../assets/phoenixes.png" />]))
    })

    it('triggers set free action when clicked', ()=> {
        const onButtonClick = sinon.spy()
        const wrapper = shallow (
            <Creature onButtonClick={onButtonClick} creature={fakeCreature} setFree={setFree}/>
        )
        wrapper.find('button').simulate('click')
        expect(status).to.eql('setFree')
    })

    it('finishes settingFree', ()=> {
        const onButtonClick = sinon.spy()
        var clock = sinon.useFakeTimers()
        const wrapper = shallow (
            <Creature onButtonClick={onButtonClick} creature={fakeCreature} setFree={setFree} finishSettingFree={finishSettingFree}/>
        )
        wrapper.find('button').simulate('click')
        clock.tick(15000)
        expect(status).to.eql("finished settingFree")
    })

})


