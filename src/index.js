import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootreducer from './rootreducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ||compose

const store = createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(thunk)),
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
