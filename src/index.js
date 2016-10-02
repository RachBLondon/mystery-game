import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './components/app'
import rootReducers from './reducers'

export default function configureStore(initalState) {
  const createStoreWithMiddleware = createStore(
      rootReducers,
      initalState,
        compose(
            applyMiddleware())
        )
      return createStoreWithMiddleware
}

const store = configureStore({})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
