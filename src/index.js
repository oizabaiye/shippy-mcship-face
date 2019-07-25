import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// const initialState = {
//   shipsData: [],
//   isLoading: true
// }

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const App = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

store.dispatch({ type: "MAKE_GREY"})

ReactDOM.render(<App />, document.getElementById('root'))
