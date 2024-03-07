import { Square } from "./components/Square";
import React from "react";

export default function Board() {

  // const [squareValues, setSquarevalues] = React.useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = React.useState(true) ;
  const [winnerName,setWinnerName] = React.useState("Let's Start");
  const [allStepSquareValues, setAllSetSquareValues] = React.useState([Array(9).fill(null)])
  const currentStepSquareValues =(allStepSquareValues[allStepSquareValues.length -1])
  // const [currentStepSquareValues, setCurrentStepSquareValues]=React.useState(allStepSquareValues[allStepSquareValues.length -1]);

  // function GetCurrentStepSquareValues(allStepSquareValues){
  //   const currentStepSquareValues =(allStepSquareValues[allStepSquareValues.length -1])
  //   return currentStepSquareValues
  // }

  function toggleMove(currentMove){
    setCurrentMove(prevmove=> !prevmove)
    return currentMove ? 'X':'O';
  }
  
  function toggleSquareValue(squareNumber){
    if(calculateWinner(currentStepSquareValues)||currentStepSquareValues[squareNumber])
    {
      return
    }

    const tempArray = currentStepSquareValues.slice();
    tempArray[squareNumber]= toggleMove(currentMove)
    setAllSetSquareValues([...allStepSquareValues,tempArray])

    const winner = calculateWinner(tempArray);
    if (winner) {
      setWinnerName(`${winner} is a winner`);
    } else {
      if (!tempArray.includes(null)) {
        setWinnerName("No winner");
      } else {
        setWinnerName(`Next move: ${currentMove ? 'O' : 'X'}`);
      }
    }
  }

  function calculateWinner(squareLines){
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i=0; i<winningLines.length; i++){
      const[a,b,c]=winningLines[i]
      if(squareLines[a] && squareLines[a]===squareLines[b] && squareLines[b]===squareLines[c]){
        return squareLines[a];
      }
    }
    return null;
  }

  function ResetSquareValues(){
    
  }

  console.log(allStepSquareValues);
  console.log(currentStepSquareValues);

  return(
    <div className="game-layout">
      <div className="left-area">

      </div>
      <div className="main-area">
        <div className="winner-announcement">{winnerName}</div>
        <div className="board-table">
          {currentStepSquareValues.map((value, index) => (
            <Square
              key={index}
              value={value}
              clas={`square s${index + 1}`}
              toggleFunction={() => toggleSquareValue(index)}
            />
          ))}
        </div>
        <div className="All-buttons">
          <button className="previous round buttons">⬅ Prev step</button>
          <button onClick={ResetSquareValues} className="reset buttons">Reset Board</button>
          <button className="next round buttons">Next step ⮕</button>
        </div>
      </div>
      <div className="right-area">

      </div>
    </div>
  )
}


