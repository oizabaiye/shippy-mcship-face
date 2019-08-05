import React from 'react'

class Details extends React.Component {

  render() {
    return(
      <div className="details">
         <p>{this.props.item.name}</p>
      </div>
    )
  }
}

export default Details