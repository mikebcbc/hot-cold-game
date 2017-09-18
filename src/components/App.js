import React, { Component } from 'react';
import './App.css';

import Guesser from './Guesser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Guesser />
      </div>
    );
  }
}

export default App;
