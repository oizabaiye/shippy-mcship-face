import React from 'react'

class Details extends React.Component {

  render() {
    return(
      <div className="details">
        <h4>The {this.props.item.name}</h4>
        <p>I can carry {this.props.item.passengers} people</p>
      </div>
    )
  }
}

export default Details