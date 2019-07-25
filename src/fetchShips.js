const FETCH_BEGIN = 'FETCH_BEGIN'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'


const fetchBegin = () => ({
  type: FETCH_BEGIN
})

const fetchSuccess = (shipData) => ({
  type: FETCH_SUCCESS,
  payload: { shipData }
})

const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: { error }
})


const fetchShips = () => {
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

// componentDidMount() {
//   fetch('https://swapi.co/api/starships/')
//   .then(response => {
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//     return response.json()
//   })
//   .then(data => {
//     this.setState({
//       shipsData: data.results
//     })
//     console.log(data.results)
//   })
// }

export default fetchShips