import React from 'react'

import { connect } from 'react-redux'


class ShipList extends React.Component {


  render() {
    // const { error, isLoading, ships} = this.props
    // if (error) {
    //   return <div className="errorMsg">Error! {error.message}</div>
    // }
    // if (isLoading) {
    //   return <div className="loadingMsg">Loading...</div>
    // }

    return(
      <div className="shipList">
        <h2>A list of starships</h2>
        {this.props.shipData.map(element => {
          return (
            <div className="ship" key={element.model}>
             <p><span className="bold">Starship: </span>{element.name}; <span className="bold">Model: </span> {element.model}</p>
             
            </div>
          )
         })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shipData: state.shipData,
    // isLoading: state.isLoading,
    // error: state.error

  }
}

export default connect(mapStateToProps)(ShipList)