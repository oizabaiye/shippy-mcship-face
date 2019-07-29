import React from 'react'

class Details extends React.Component {

  render(props) {
    return(
      <div className="details">
        {props.map(property => {
          return (<p>{property}</p>)
        })}
      </div>
    )
  }
}

export default Details