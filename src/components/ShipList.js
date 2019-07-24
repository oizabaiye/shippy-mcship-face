import React from 'react'
import Ship from './Ship'

class ShipList extends React.Component {
  constructor(){
    super()
    this.state = {
      shipsData: []
      // shipsData: [
      //   {
      //     id: 21,
      //     name: 'greg',
      //     model: 'blue Steel 500',
      //     details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut eius nostrum animi ad dolores aut cupiditate reiciendis culpa provident asperiores, maxime vitae maiores, architecto distinctio incidunt suscipit. Inventore, quibusdam.'
      //   },
      //   {
      //     id: 32,
      //     name: 'camron',
      //     model: 'N5G snn',
      //     details: 'peacock males are so fine and I wonder what they care about'
      //   },
      //   {
      //     id: 400,
      //     name: 'boaty mcFace',
      //     model: '523',
      //     details: 'so you are saying that feminism is egocentric? Well how egocentric is patriarchy dummy? Riddle me that'
      //   }
      // ]
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(data => {
      this.setState({
        shipsData: data.results
      })
      console.log(data.results)
    })
  }



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

export default ShipList;