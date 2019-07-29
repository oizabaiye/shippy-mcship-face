const fetchShips = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(json => {
    return json.results
  })
}


export function getData() {
  return (dispatch) => {
    dispatch({
      type: 'GET_DATA_BEGIN'
    })

    Promise.all([
      fetchShips('https://swapi.co/api/starships/'),
      fetchShips('https://swapi.co/api/starships/?page=2'),
      fetchShips('https://swapi.co/api/starships/?page=3'),
      fetchShips('https://swapi.co/api/starships/?page=4') 
    ])
    .then(data => {
      dispatch({
        type: 'GET_DATA_SUCCESS',
        ships: data.flat()
      })
    })
    // return fetch('https://swapi.co/api/starships/')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   console.log(data.results)
    //   dispatch({
    //     type: 'GET_DATA_SUCCESS', 
    //     ships: data.results
    //   })
    // })
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





