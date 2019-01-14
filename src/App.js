import React, { Component } from 'react';
import './App.css';
import { Navig } from './components/nav/nav.js';
import './style/style.css'

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
