import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navig } from './components/nav/nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navig />
        </header>

      </div>
    );
  }
}


export default App;
