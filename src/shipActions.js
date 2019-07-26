export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'


export const fetchBegin = () => ({
  type: FETCH_BEGIN,
  // payload: { isLoading }
})

export const fetchSuccess = (ships) => ({
  type: FETCH_SUCCESS,
  ships
})

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

 
export const fetchShips = () => {
  return dispatch => {
    dispatch(fetchBegin())
    
    return fetch("https://swapi.co/api/starships/")
      .then(response => response.json())
      .then(jsonData => {
        dispatch(fetchSuccess(jsonData.results))
        console.log(jsonData.results)
      })
      .catch(error => dispatch(fetchFailure(error)))
  }
}


