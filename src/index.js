import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';
import reducer from './reducers/index'
import { getData } from './actions/index'




const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(getData())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
