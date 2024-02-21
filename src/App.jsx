import { Square } from "./components/Square";
import React from "react";

export default function Board() {

  const [squareValues, setSquarevalues] = React.useState([Array(9).fill(null)]);
  const [firstMove, setFirstmove] = React.useState('X') 

  function toggleSquareValue(){

  }

  return (
    <div className="board-table">
        <Square value={squareValues[0]} clas="square s1" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[1]} clas="square s2" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[2]} clas="square s3" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[3]} clas="square s4" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[4]} clas="square s5" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[5]} clas="square s6" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[6]} clas="square s7" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[7]} clas="square s8" toggleFunction={toggleSquareValue}/>
        <Square value={squareValues[8]} clas="square s9" toggleFunction={toggleSquareValue}/>
    </div>
  )
}


