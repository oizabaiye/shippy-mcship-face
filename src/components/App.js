import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import ShipList from './ShipList'


const App = () => {
  return (
      <div className="App">
        <Header />
        <main>
            <ShipList />
        </main>
        <Footer />
      </div>
   
  )
}

export default App
