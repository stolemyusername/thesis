import React from 'react';

const GametypeOptions = ({ startGame , endGame}) => {
  const gameTypes = ['Solo', 'Battle']
  
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">_
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
      {gameTypes.map((type) => (
        <li onClick={() => startGame(type)}>{type}</li>
      ))}
        <li className="divider"></li>
        <li onClick={endGame} >End Game</li>
      </ul>
    </div>
  )
}

export default GametypeOptions