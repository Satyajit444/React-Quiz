import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import CountDownTimer from './CountDownTimer';
import axios from "axios";
// import validator from 'validator'
const Quiz = () => {

    const { score, setScore, setGameState, index, setIndex } = useContext(QuizContext);

    const [currQuiestion, setCurrQuestion] = useState([]);
    //const[ index,setIndex]=useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const hoursMinSecs = { hours: 0, minutes: 0, seconds: 30 }



    // console.log({seconds})
    // const [seconds,setSeconds]=useState(30)
    // var timer

    // useEffect(()=>{
    //    timer = setTimeout(()=>{
    //         setSeconds(seconds-1);


    //     },1000)
    //     return () => clearTimeout(timer)


    // })
    // console.log(seconds);

    // if(seconds==0){
    //     clearTimeout(timer)
    //     console.log("stop")
    // }

    const changeOption = (e) => {

        setOptionChosen(e.target.value.trim());
    }



    useEffect(() => {
        //console.log(score);
        axios.get("https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json")
            .then((res) => setCurrQuestion(res.data))

    }, [score]);



    return (
        <div className='Quiz'>


            {currQuiestion.map((values, id) => {
                const { question, answer } = values;

                const nextQuestion = () => {
                    if (answer.toLowerCase() === optionChosen.toLowerCase()) {
                        setScore(score + 1)
                    }
                    setIndex(index + 1)
                }
                const skipQuestion = () => {
                    setIndex(index + 1)
                }
                const finishQuiz = () => {

                    if (answer === optionChosen) {
                        setScore(score + 1)
                    }
                    setGameState("result");
                }



                if (id === index) {

                    return (



                        <div key={values.id}>
                            <h3 className='h3-tag'>
                                {" "}
                                {index + 1}/10{" "}
                            </h3>
                            <CountDownTimer hoursMinSecs={hoursMinSecs} />
                            <h3>{question}</h3>


                            <center><input type="text" placeholder="Answer:" onChange={changeOption}></input></center>



                            {index === currQuiestion.length - 1 ? (
                                <center><button onClick={finishQuiz}>Submit</button></center>
                            ) : (
                                <center><button className='nxt-btn' onClick={nextQuestion}>Next</button></center>)
                            }
                            {/* <center><button onClick={nextQuestion}>Next</button></center> */}
                            {index === currQuiestion.length - 1 ? null : (<button className='skip-btn' onClick={skipQuestion}>skip</button>)}

                        </div>

                    )
                }
                return null;

            })}



        </div>
    )
}

export default Quiz