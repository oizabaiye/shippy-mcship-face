
// import {
//   FETCH_BEGIN,
//   FETCH_SUCCESS,
//   FETCH_FAILURE
// } from '../shipActions'

//  const initialState = {
//   shipData: [],
//   isLoading: false,
//   error: null
// }

const initialState = {
  shipData: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'GET_DATA') {
    return Object.assign({}, state, {
      shipData: state.shipData.concat(action.payload)
    })
  }

  return state

  // switch(action.type) {
  //   case FETCH_BEGIN:
  //     return {
  //       ...state, 
  //       isLoading: true,
  //       error: null
  //     }

  //   case FETCH_SUCCESS:
  //     return {
  //       ...state, 
  //       shipData: action.ships,
  //       isLoading: false
  //     }

  //   case FETCH_FAILURE:
  //     return {
  //       ...state, 
  //       shipData: [],
  //       isLoading: false,
  //       error: action.error
  //       }
  
  //   default:
  //     return state

  
}



export default reducer