import React from 'react';

const GametypeOptions = ({ startFreshGame , terminateGame}) => {
  const gameTypes = ['Solo', 'Battle']
  
  return (
    <div className="dropdown dropdown-inline fa fa-bars">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
      {gameTypes.map((type, i) => (
        <li key = {i} onClick={() => startFreshGame(type)}>{type}</li>
      ))}
        <li className="divider"></li>
        <li onClick={() => terminateGame(false)} >End Game</li>
      </ul>
    </div>
  )
}

export default GametypeOptions