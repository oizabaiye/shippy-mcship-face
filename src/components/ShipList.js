import React from 'react'
import Ship from './Ship'
import { connect } from 'react-redux'

class ShipList extends React.Component {

  makegrey = () => {
    this.props.dispatch({ type: "MAKE_GREY" })
  }

  // componentDidMount() {
  //   fetch('https://swapi.co/api/starships/')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw Error(response.statusText)
  //     }
  //     return response.json()
  //   })
  //   .then(data => {
  //     this.setState({
  //       shipsData: data.results
  //     })
  //     console.log(data.results)
  //   })
  // }



  render() {
    let shipComponents = this.state.shipsData.map(item => {
      return <Ship key={item.model} item={item} />
    })

    return(
      <div className="shipList">
        <h2>I am a list of ships!</h2>
        <p>Hear me Roar!</p>
        
        {shipComponents}
        <button>Next / Previous</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shipsData: state.shipsData
  }
}

export default connect(mapStateToProps)(ShipList)