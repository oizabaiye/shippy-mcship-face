
export function getData() {
  return function(dispatch) {
    return fetch('https://swapi.co/api/starships/')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'GET_DATA', 
        payload: data.results
      })
    }).catch(error => {
      console.log(error)
    })
  }
}





