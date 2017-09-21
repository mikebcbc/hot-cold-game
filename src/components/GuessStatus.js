import React from 'react';
import './GuessStatus.css';

function GuessStatus(props) {
	return (
		<div className="status">{props.closeStatus}</div>
	)
}

export default GuessStatus;