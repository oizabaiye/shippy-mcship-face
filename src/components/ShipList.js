import React from 'react'
import { connect } from 'react-redux'
import './App.css'

class ShipList extends React.Component {
  render() {

    const { ships, isLoading, error } = this.props

    if (isLoading) {
      return <div>LOADING...</div>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return(     
        <div className="shipList">
          <h2>A list of starships</h2>
          <div>
            {ships.map(ship => {
              return (
                <div className="ship" key={ship.model}>
                  <p>Name: The {ship.name}; Model: {ship.model}. Manufactured by: {ship.manufacturer}</p>  
                </div>
              )
            })
            }
        </div>
      </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    ships: state.ships,
    isLoading: state.isLoading,
    error: state.error

  }
}

export default connect(mapStateToProps)(ShipList)