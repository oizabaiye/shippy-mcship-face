
import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './shipActions'

const initialState = {
  shipData: [],
  isLoading: false,
  error: null
}

const rootreducer = (state = initialState, action) => {
  console.log('rootreducer', state, action)

  switch(action.type) {
    case FETCH_BEGIN:
      return {
        ...state, 
        isLoading: true,
        error: null
      }

    case FETCH_SUCCESS:
      return {
        ...state, 
        shipData: action.ships,
        isLoading: false
      }

    case FETCH_FAILURE:
      return {
        ...state, 
        shipData: [],
        isLoading: false,
        error: action.error
        }
  
    default:
      return state

  }
}



export default rootreducer