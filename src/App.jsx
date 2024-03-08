import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";
import { Square } from "./components/Square";
import React from "react";

export default function Board() {

  const [currentMove, setCurrentMove] = React.useState(true) ;
  const [winnerName,setWinnerName] = React.useState("Let's Start");
  const [allStepSquareValues, setAllStepSquareValues] = React.useState([Array(9).fill(null)])
  const [deletedSteps, setDeletedSteps] = React.useState([]);
  const currentStepSquareValues = (allStepSquareValues[allStepSquareValues.length -1])

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
    setAllStepSquareValues([...allStepSquareValues,tempArray])
  
    function checkWinner(){
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
    checkWinner ()
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
    setCurrentMove(true) ;
    setWinnerName("Let's Start");
    setAllStepSquareValues([Array(9).fill(null)])
  }

  function UndoStep(){
    if (allStepSquareValues.length === 1) return;
    const tempAllStepSquareValues = JSON.parse(JSON.stringify(allStepSquareValues));
    setAllStepSquareValues(tempAllStepSquareValues.slice(0,-1));
    const temp = [...deletedSteps,tempAllStepSquareValues.slice(-1)];
    setDeletedSteps(temp);
    toggleMove(currentMove)
    checkWinner ()
  }

  function RedoStep(){

    if (deletedSteps.length === 0) return; // No steps to redo
    const tempDeletedSteps = JSON.parse(JSON.stringify(deletedSteps));
    const tempDeletedSteps2 = tempDeletedSteps.map(array=>array.flat());
    setAllStepSquareValues(tempDeletedSteps2);
    setDeletedSteps(tempDeletedSteps2.slice(0,-1))
    toggleMove(currentMove)

  }

  return(
    <div className="game-layout">
      <div className="left-area">
        <LeftArea />
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
          <button className="previous round buttons" onClick={UndoStep}>⬅ Undo move</button>
          <button onClick={ResetSquareValues} className="reset buttons">New Game</button>
          <button className="next round buttons" onClick={RedoStep}>Redo move ⮕</button>
        </div>
      </div>
      <div className="right-area">
            <RightArea />
      </div>
    </div>
  )
}


