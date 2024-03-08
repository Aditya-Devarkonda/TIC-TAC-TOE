import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './App.jsx'
import './index.css'
import './leftArea.css'
import './ScoreCard.css';
import image from "./assets/Images/background.jpg"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ 
      backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0)), url(${image})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      }}>
      <Board />
    </div>
  </React.StrictMode>,
)
