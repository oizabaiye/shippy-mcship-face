
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
}



export default reducer