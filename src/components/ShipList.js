import React from 'react'

import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Details from './Details'
import './App.css'

class ShipList extends React.Component {
  render() {

    return(
      <BrowserRouter>      
        <div className="shipList">

          <h2>A list of starships</h2>
          <div>
            {this.props.shipData.map(element => {

              return (
                <div className="ship" key={element.model}>
                  <p>Starship: <Link to="/details">{element.name}</Link>; Model: {element.model}; Manufacturer: {element.manufacturer}</p>  
                </div>
              )

            })
            }
            
          </div>
          <Route path='/details' render={(props) => (<Details {...props}/> )}/>

      </div>
    </BrowserRouter>  
  )

 
  }
}

const mapStateToProps = state => {
  return {
    shipData: state.shipData

  }
}

export default connect(mapStateToProps)(ShipList)