import React from 'react'
import { Link } from "react-router-dom";


function Result(props) {


  const name = localStorage.getItem("name");
  return (
    <>
    <div className="score-section">
        <h2>congrats</h2>
        <h3>Dear {name}</h3>
        <h4>Total Score is 10</h4>
    
        <h4>Your correct answer is 10 out of 10</h4>
        <Link to={"/start"} >Take another Test</Link>
    </div>
    
    </>
  )
}

export default Result