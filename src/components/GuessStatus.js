import React from 'react';
import './GuessStatus.css';

function GuessStatus(props) {
	let classes = `${props.closeStatus} status`;
	return (
		<div className={classes}>{props.closeStatus}</div>
	)
}

export default GuessStatus;