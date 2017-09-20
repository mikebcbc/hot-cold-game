import React, { Component } from 'react';
import './GuessInput.css';

class GuessInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessed: [],
      guessCount: 0,
      currentGuess: null,
      correctNumber: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      correctStatus: false
    }

    this.distributeGuess = this.distributeGuess.bind(this);
  }

  // resetState() -- New game, reset state.

  distributeGuess() {
    this.setState((prev, props)=> ({
      guessCount: prev.guessCount + 1,
      guessed: [...prev.guessed, prev.currentGuess]
    }));
    if (this.state.currentGuess === this.state.correctNumber) {
      console.log('yay');
    }
  }
  listenGuess(current) {
    this.setState({
      currentGuess: Number(current)
    });
  }

  render() {
    const guessedNumbers = this.state.guessed.map((number, index) => {
      return <li key={index}>{number}</li>
    });
    return (
      <div className="guess-input">
        <div className="form">
          <input name="guess" type="text" onChange={e => this.listenGuess(e.target.value)} />
          <button type="submit" htmlFor="guess" onClick={this.distributeGuess}>Guess</button>
        </div>
        <div className="guess-number">Guess #{this.state.guessCount}</div>
        <ul className="guess-history">
          {guessedNumbers}
        </ul>
      </div>
    );
  }
}

export default GuessInput;