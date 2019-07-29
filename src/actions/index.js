const fetchShips = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(json => {
    return json.results
  })
}


export const getData = () => {
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
    .catch(error => {
      dispatch({
        type: 'GET_DATA_ERROR',
        error: error
      })
    })
  }

}





