import React from 'react'
import {expect} from 'chai'
import {shallow, mount, render} from 'enzyme'
import Game from '../../src/components/game/Game'
import ScoreCard from '../../src/components/game/view/ScoreCard'
import SortTabs from '../../src/components/game/view/SortTabs'
import Modal from '../../src/components/game/view/Modal'



import {creatures} from './../../src/dummyData'


describe('<Game />', ()=> {


    let wrapper
    before(() => {
        wrapper = shallow(<Game creatures={creatures} nameError={false}/>)
    })

    it('renders SortTabs', ()=>{
        expect(wrapper.find(SortTabs)).to.have.length(1)
    })

    it('renders Modal', ()=>{
        expect(wrapper.find(Modal)).to.have.length(1)
    })

})
