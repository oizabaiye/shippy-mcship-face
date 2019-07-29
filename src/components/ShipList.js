import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'; //failed attempt at pagination
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

    const makegrey = {
      backgroundColor: 'gray'
    }

    return(     
      <div className="shipList">
        <h2>A list of starships</h2>
        <div>
          {ships.map((ship, index) => {
            //greyify every 8th ship, excluding ships[0]
            if ((index + 1) % 8 === 0) {
              return (
                <div className="ship" key={ship.model} style={makegrey}>
                <p>Name: The {ship.name}; Model: {ship.model}. Manufactured by: {ship.manufacturer}</p>  
                </div>)
            }
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