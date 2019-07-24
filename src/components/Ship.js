import React from 'react'
import Details from './Details'

class Ship extends React.Component {
  
  constructor() {
    super()
    this.state = {
      showDetails: false
    }
  }

  displayShipDetails = () => {
    this.setState(prevState => {
      return {
        showDetails: !prevState.showDetails
      }
    })
  }

  render() {
    return(
          <div className="ship" key={this.props.item.model}>
              <p>I am {this.props.item.name} and my model is {this.props.item.model}</p>
              <button onClick={this.displayShipDetails}>DEETS</button>
              { this.state.showDetails ? <Details item={this.props.item}/> : null }
              <hr />
          </div>
        
    )
  }
}

export default Ship