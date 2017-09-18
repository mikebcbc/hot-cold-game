import React, { Component } from 'react';
import './GuessInput.css';

class GuessInput extends Component {
  render() {
    return (
      <div className="guess-input">
        <input name="guess" type="text" />
        <button type="submit" for="guess">Guess</button>
      </div>
    );
  }
}

export default GuessInput;