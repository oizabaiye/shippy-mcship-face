
export function getData() {
  return (dispatch) => {
    dispatch({
      type: 'GET_DATA_BEGIN'
    })

    return fetch('https://swapi.co/api/starships/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.results)
      dispatch({
        type: 'GET_DATA_SUCCESS', 
        ships: data.results
      })
    })
    .catch(error => {
      dispatch({
        type: 'GET_DATA_ERROR',
        error: error
      })
    })
  }

  // return function(dispatch) {
  //   return fetch('https://swapi.co/api/starships/')
  //   .then(response => response.json())
  //   .then(data => {
  //     dispatch({
  //       type: 'GET_DATA', 
  //       payload: data.results
  //     })
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }
}





