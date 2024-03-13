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
                <p className='rule-heading'>Instructions</p>
                <ol className='rule-points'>
                    <li className='point1'>Use new game button to play again.</li>
                    <li className='point'>Use undo button to go backward in steps & Redo to go forward after undo.</li>
                </ol>
           </div>
           
        </div>
    );
};

export default LeftArea;