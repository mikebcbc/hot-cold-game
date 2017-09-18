import React, { Component } from 'react';
import './Guesser.css';

class Guesser extends Component {
  render() {
    return (
      <div className="guesser">
        <div className="sub-heading">
          <h2>Make a guess!</h2>
        </div>
        <div className="guess-number">Guess #0</div>
        <ul className="guess-history">
          <li>21</li>
          <li>52</li>
        </ul>
      </div>
      

    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
    );
  }
}

export default Guesser;