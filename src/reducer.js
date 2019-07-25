
const initialState = {
  shipData: []
}

const reducer = (state = initialState, action) => {
  console.log('reducer', state, action)

  switch(action.type) {
   case 'MAKE_GREY':
     return {
       shipData: state.shipData
     }
     default:
       return state

  }
}

export default reducer