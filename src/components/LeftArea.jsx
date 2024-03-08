import React from 'react';

function LeftArea () {
    return (
        <div className='left-cont'>
            <div className='name-container container'>
                <p className='heading'>Enter Players Name</p>
        
                <label htmlFor="playerX" className='Xlabel label'>Player X name</label>
                <br></br>
                <input type="text" id='playerX' className='Xinput input' />
            
        
                <label htmlFor="playerO" className='Olabel label'>Player O name</label>
                <br></br>
                <input type="text" id='playerO' className='Oinput input'/>
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