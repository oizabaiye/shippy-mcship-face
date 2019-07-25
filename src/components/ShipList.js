import React from 'react'

import { connect } from 'react-redux'
import { fetchShips } from '../fetchShips'

class ShipList extends React.Component {

  makegrey = () => {
    this.props.dispatch({ type: "MAKE_GREY" })
  }

  //shipData is passed through fetchShips
  componentDidMount() {
    this.props.dispatch(fetchShips())
  }



  render() {
    const { error, isLoading, shipData} = this.props

    if (error) {
      return <div className="errorMsg">Error! {error.message}</div>
    }

    if (isLoading) {
      return <div className="loadingMsg">Loading...</div>
    }

    return(
      <div className="shipList">
        <h2>I am a list of ships!</h2>
        <ul>
          {shipData.map(starship => {
            
            return (
              <li key={starship.model} details={starship} className="shipItem"> 
                The starship {starship.name}, model {starship.model}
              </li>
            )
          })}
          
        </ul>

        <button>Next / Previous</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shipData: state.shipData,
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps)(ShipList)