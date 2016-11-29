import React from 'react';


const Gamestatus = (props) => {
	console.log(props)
	// key = {i} 
	// challengeProgress={props.challengeProgress}
	// challenge={props.challenge} 
	// gameProgress={props.gameProgress} 
	// currentGameStats={props.currentGameStats} 
	// playerNames={props.playerNames} />

	// console.log('Props in gamestatus', props)

	//Decide if it is the current game
		//If it is, assign this variable to the split config
		//Else, create it as the singular mode
			//Decide on the styling based on who one it
			console.log('props.gameProgress', props.gameProgress)
			console.log('props.gameNumber', props.gameNumber)
	const GameTile = () => {
		if (props.gameNumber === props.challengeProgress) {
			return (
				<div className="gamestatus">
					<span className="gamestatus_score">{'Current Game'}</span>
				</div>
				)
		} else if (props.gameNumber > props.challengeProgress) {
			return (
				<div className="gamestatus">
					<span className="gamestatus_score">{'Not Played'}</span>
				</div>
				)
		} else {
			if (props.gameProgress[props.gameNumber].winner === 'me') {
				return (
					<div className="gamestatus">
						<span className="gamestatus_score">{props.gameProgress[props.gameNumber].score}</span>
					</div>
					)
			} else {
				return (
					<div className="gamestatus lost">
						<span className="gamestatus_score">{props.gameProgress[props.gameNumber].score}</span>
					</div>
					)
			}
		}
	}
	return (
		<GameTile />
	)
}

export default Gamestatus