import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "./Result";
// import Timer from "./Timer";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  // const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [qst, setQst] = useState(0);
  const [counter, setCounter] = useState(1);
  const [count, setCount] = useState(30);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json"
      )
      .then((res) => setCurrentQuestion(res.data[qst]));
  }, [qst]);

  const handleNextOption = () => {
    if (qst >= 9) {
      setShowResult(true);
    } else {
      setQst(qst + 1);
      setCounter(counter + 1);
      setCount(30)
    }
  };
  const handleSkipOption = () => {
    setQst(qst + 1);
    setCounter(counter + 1);
  };
  // const takeAnotherTest = () => {
  //   setScore(0);
  //   setCurrentAnswer();
  //   setShowResult(false);
  //   setCurrentQuestion(0);
  // };
  const changeOption = (e) => {
    setCurrentAnswer(e.target.value.trim());
  };
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count == 0) {
      setCount(30);
      setQst(qst + 1);
      setCounter(counter + 1);
    }
  });

  return (
    <>
      <div className="App">
        {showResult ? (
          <Result />
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {counter} of 10</span>
              </div>
              <h1>00: {count}</h1>

              <h3>{currentQuestion.question}</h3>
            </div>
            <div className="answer-section">
              <input
                type="text"
                placeholder="enter your answer"
                value={currentAnswer}
                onChange={changeOption}
              />
            </div>
            <button onClick={handleSkipOption}>Skip</button>

        { currentQuestion.length == 10 ?
            <button onClick={handleNextOption}>Submit</button>
          :
          <button onClick={handleNextOption}>Next</button>
        }
          
         
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
