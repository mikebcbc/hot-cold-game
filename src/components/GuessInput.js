import React, { Component } from 'react';
import './GuessInput.css';

class GuessInput extends Component {
  render() {
    return (
      <div className="guess-input">
        <input name="guess" type="text" />
      </div>
    );
  }
}

export default GuessInput;