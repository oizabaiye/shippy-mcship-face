import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootreducer from './rootreducer'
import thunk from 'redux-thunk'

const store = createStore(
  rootreducer,
  applyMiddleware(thunk)
)


store.dispatch({ type: "MAKE_GREY"})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
