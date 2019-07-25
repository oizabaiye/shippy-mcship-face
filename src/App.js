import React from 'react';
import './App.css';
import Header from './components/Header'
import ShipList from './components/ShipList'


function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <ShipList />
        </main>
      </div>
   
  );
}

export default App;
