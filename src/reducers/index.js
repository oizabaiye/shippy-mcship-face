
const initialState = {
  ships: [],
  isLoading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'GET_DATA_BEGIN':
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        ships: action.ships,
        isLoading: false,
      }
    case 'GET_DATA_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}



export default reducer