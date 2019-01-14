import React, { Component } from 'react';
import './App.css';
import { Navig } from './components/nav/nav.js';
import { Carousel } from './components/carousel/carousel.js';
import './style/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navig />
        </header>
        <main>
          <Carousel />
        </main>

      </div>
    );
  }
}


export default App;
