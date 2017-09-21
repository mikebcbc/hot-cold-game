import React, { Component } from 'react';
import GuessHistory from './GuessHistory';
import GuessStatus from './GuessStatus';
import './GuessInput.css';

class GuessInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessed: [],
      guessCount: 0,
      closeStatus: null,
      currentGuess: null,
      correctNumber: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      correctStatus: false,
      errorMessage: null
    }

    this.distributeGuess = this.distributeGuess.bind(this);
  }

  // resetState() -- New game, reset state.

  distributeGuess(e) {
    e.preventDefault();
    this.setState((prev, props)=> ({
      guessCount: prev.guessCount + 1,
      guessed: [...prev.guessed, prev.currentGuess]
    }));
    if (this.state.currentGuess === this.state.correctNumber) {
      alert('yay');
    } else {
      this.setState({
        closeStatus: Math.abs(this.state.currentGuess - this.state.correctNumber) <= 10 ? 'Hot' : 'Cold'
      })
    }
  }

  listenGuess(current) {
    let number = Number(current);
    let error = null;
    if (Number.isNaN(number)) {
      error = 'The value must be a number.';
    } else if (number <= 0 || number > 100) {
      error = 'The value must be between 1 and 100.';
    }
    
    if (!error) {
      this.setState({
        currentGuess: Number(current),
        errorMessage: null
      });
    } else {
      this.setState({
        errorMessage: error
      })
    }
  }

  render() {
    return (
      <div className="guess-input">
        <GuessStatus closeStatus={this.state.closeStatus} />
        <form className="form" onSubmit={this.distributeGuess}>
          <input name="guess" type="text" onChange={e => this.listenGuess(e.target.value)} />
          <button type="submit" htmlFor="guess" disabled={Boolean(this.state.errorMessage)}>Guess</button>
        </form>
        <div className="error">{this.state.errorMessage}</div>
        <div className="guess-number">Guess #{this.state.guessCount}</div>
        <GuessHistory guessed={this.state.guessed} />
      </div>
    );
  }
}

export default GuessInput;