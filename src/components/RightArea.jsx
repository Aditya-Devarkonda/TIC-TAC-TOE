import React from 'react';

function ScoreCard (){
    return (
      <div className="score-card">
        <div className="player-card">
          <h2 className='player-name'>Player X</h2>
          <div className="score">{5}</div>
        </div>
        <div className="player-card">
          <h2 className='player-name'>Player O</h2>
          <div className="score">{0}</div>
        </div>
      </div>
    );
  };
  
  export default ScoreCard;