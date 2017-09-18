import React, { Component } from 'react';
import './Guesser.css';

import GuessInput from './GuessInput';

class Guesser extends Component {
  render() {
    return (
      <div className="guesser">
        <div className="sub-heading">
          <h2>Make a guess!</h2>
        </div>
        <div className="status">Hot</div>
        <GuessInput />
        <div className="guess-number">Guess #0</div>
        <ul className="guess-history">
          <li>21</li>
          <li>52</li>
        </ul>
      </div>
    );
  }
}

export default Guesser;