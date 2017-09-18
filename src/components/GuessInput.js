import React, { Component } from 'react';
import './GuessInput.css';

class GuessInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessed: [1, 2, 5, 6]
    }
  }
  render() {
    const guessedNumbers = this.state.guessed.map((number, index) => {
      return <li key={index}>{number}</li>
    });
    return (
      <div className="guess-input">
        <input name="guess" type="text" />
        <button type="submit" htmlFor="guess">Guess</button>
        <div className="guess-number">Guess #0</div>
        <ul className="guess-history">
          {guessedNumbers}
        </ul>
      </div>
    );
  }
}

export default GuessInput;