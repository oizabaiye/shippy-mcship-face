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
        <div>
          {ships.map((ship, index) => {
            console.log(index)
            return (
              <div className="ship" key={ship.model} item={ship}>
                <div className="shipText">
                  <h3>{ship.name}</h3>
                  <p>Model: {ship.model}</p>
                  <p>Manufactured by {ship.manufacturer}</p>
                </div>
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