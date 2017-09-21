import React from 'react';
import './GuessHistory.css';

function GuessHistory(props) {
  const guessedNumbers = props.guessed.map((number, index) => {
    return <li key={index}>{number}</li>
  });
  return (
      <ul className="guess-history">
        {guessedNumbers}
      </ul>
  );
};

export default GuessHistory;