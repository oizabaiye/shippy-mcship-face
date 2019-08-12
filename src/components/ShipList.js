import React from 'react'
import { connect } from 'react-redux'
import './App.css'

 
class ShipList extends React.Component {
  render() {

    const { ships, isLoading, error } = this.props

    const formatNum = (string) => {
      if (string === "unknown") {
        return "Unknown"
      } else {
        let int = parseInt(string, 10)
        return new Intl.NumberFormat().format(int)
      }
    }

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
                <div className="icon">
                  <i className="fab fa-empire fa-3x"></i>
                </div>
                <div className="shipText">
                  <h3>{ship.name}</h3>
                  <p><b>Model:</b> {ship.model}</p>
                  <p><b>Manufactured by</b> {ship.manufacturer}</p>
                  <p><b>Capacity:</b> {formatNum(ship.cargo_capacity)} kg</p>
                  <p><b>Required crew:</b> {formatNum(ship.crew)}</p>
                  <p><b>Build cost:</b> {formatNum(ship.cost_in_credits)} credits</p>
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