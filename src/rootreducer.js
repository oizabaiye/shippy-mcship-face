import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './fetchShips'

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
        isLoading: false,
        shipData: action.payload.shipData
      }

    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        shipData: []
      }
  
    case 'MAKE_GREY':
      return {
        shipData: state.shipData
      }
    
    default:
      return state

  }
}

export default rootreducer