import React from 'react';
import './App.css';
import ShipList from './components/ShipList'


function App() {
  return (
   
      <div className="App">
        <header className="App-header">
          <h1>A List of Starships</h1>
        </header>
        <main>
          <ShipList />
        </main>
      </div>
   
  );
}

export default App;
