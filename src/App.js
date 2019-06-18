import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GitHub Commit Counter
          by <a href="https://www.twitter.com/joelatwar" className="App-link" target="_blank" rel="noopener noreferrer">Joel Guerra</a>, <a href="https://www.twitter.com/sethvoltz"className="App-link" target="_blank" rel="noopener noreferrer">Seth Voltz</a>, and <a href="https://www.twitter.com/amartincastro" className="App-link" target="_blank" rel="noopener noreferrer">Ariel Martin Castro</a>
        </p>
      </header>
    </div>
  );
}

export default App;
