import React, { Component } from 'react';
import './App.css';

import Guesser from './Guesser';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Hot or Cold?</h1>
        <Guesser />
      </div>
    );
  }
}

export default App;
