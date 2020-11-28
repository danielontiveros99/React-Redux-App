import React from 'react';
import './App.css';

//Make components inm folder first then import them.
import FoxForm from './components/FoxForm'
import FoxList from './components/FoxList'

function App() {
  return (
    <div className="App">
      <h1>Cutie Foxies</h1>
      <FoxForm />
      <FoxList />
    </div>
  );
}

export default App;

//  make an actions file in actions folder, im going to keep them all in one.