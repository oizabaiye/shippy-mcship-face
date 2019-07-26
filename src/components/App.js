import React from 'react';
import './App.css';
import Header from './Header'
import ShipList from './ShipList'


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
