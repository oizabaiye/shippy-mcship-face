export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'


const fetchBegin = () => ({
  type: FETCH_BEGIN,
  // payload: { isLoading }
})

const fetchSuccess = (shipData) => ({
  type: FETCH_SUCCESS,
  payload: { shipData }
})

const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: { error }
})


export const fetchShips = () => {
  return dispatch => {
    dispatch(fetchBegin())
    return fetch("https://swapi.co/api/starships/")
      .then(response => response.json())
      .then(jsonData => {
        dispatch(fetchSuccess(jsonData.results))
        return jsonData.results
      })
      .catch(error => dispatch(fetchFailure(error)))
  }
}

