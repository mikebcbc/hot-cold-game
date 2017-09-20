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
        <GuessInput />
      </div>
    );
  }
}

export default Guesser;