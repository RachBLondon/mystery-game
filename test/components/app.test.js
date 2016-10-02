import React from 'react'
import {expect} from 'chai'
import {shallow, mount, render} from 'enzyme'
import App from '../../src/components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './../../src/reducers'

function configureStore(initalState) {
    const createStoreWithMiddleware = createStore(
        rootReducers,
        initalState,
        compose(
            applyMiddleware())
    )
    return createStoreWithMiddleware
}
const store = configureStore({})


describe('<App />', ()=> {

    it('displays a h1', ()=>{
        const wrapper = render(
            <Provider store={store} >
                <App/>
            </Provider>    )
        expect(wrapper.html()).to.contain('h1')
    })
})