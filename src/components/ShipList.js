import React from 'react'

import { connect } from 'react-redux'
// import { fetchShips } from '../shipActions'

class ShipList extends React.Component {


  //shipData is passed through fetchShips
  // componentDidMount() {
  //   this.props.dispatch(fetchShips())
  // }



  render() {
    const { error, isLoading, ships} = this.props

    if (error) {
      return <div className="errorMsg">Error! {error.message}</div>
    }

    if (isLoading) {
      return <div className="loadingMsg">Loading...</div>
      
    }

    //issue with isLoading. Need it to turn off one browser refreshes

    return(
      <div className="shipList">
        <h2>I am a list of ships!</h2>
        {<ul>
          {ships.map(starship => {
              return (
                <li key={starship.model} details={starship} className="shipItem"> 
                  The starship {starship.name}, model {starship.model}
                </li>
              )
            })
          }
        </ul>}
        <button>Next / Previous</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ships: state.ships,
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps)(ShipList)