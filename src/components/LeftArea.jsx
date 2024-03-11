import React from 'react';

function LeftArea ({setPlayerXName,setPlayerOName}) {
    return (
        <div className='left-cont'>
            <div className='name-container container'>
                <h2 className='name-heading'>Enter Players Name</h2>
        
                <label htmlFor="playerX" className='Xlabel label'>Player X name</label>
                <br></br>
                <input
                    type="text"
                    id="playerX"
                    className="Xinput input"
                    onChange={(e) => setPlayerXName(e.target.value)}
                />
            
        
                <label htmlFor="playerO" className='Olabel label'>Player O name</label>
                <br></br>
                <input
                    type="text"
                    id="playerO"
                    className="Oinput input"
                    onChange={(e) => setPlayerOName(e.target.value)}
                />
           </div>
           <div className='rule-container container'>
                <p className='rule-heading'>Game rules</p>
                <ol className='rule-points'>
                    <li className='point1'>Each player will get first chance to play</li>
                    <li className='point'>Best of 5 will be calculated to decide the winner.</li>
                </ol>
           </div>
           
        </div>
    );
};

export default LeftArea;