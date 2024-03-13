// RightArea.jsx

import React from 'react';

export default function ScoreCard ({playerXName, playerOName, scoreX, scoreO}){
    const playerX ="Player X Score"
    const playerO = "Player O Score"
    return (
      <div className="score-card">
        <div className="player-card">
          <h2 className='player-name'>{playerXName||playerX}</h2>
          <div className="score">{scoreX}</div>
        </div>
        <div className="player-card">
          <h2 className='player-name'>{playerOName||playerO}</h2>
          <div className="score">{scoreO}</div>
        </div>
      </div>
    );
};
