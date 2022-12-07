import React,{useState,useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
const CountDownTimer = ({hoursMinSecs}) => {
   
    const {minutes = 0, seconds = 60 } = hoursMinSecs;
    const { index,setIndex} =useContext(QuizContext);
    const [[mins, secs], setTime] = useState([minutes, seconds]);
    

    const tick = () => {
   
        
        if (mins === 0 && secs === 0) {
            setIndex(index+1);
        } else if (secs === 0) {
            setTime([mins, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };


    //const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div className='timer'>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
            
        </div>
    );
}

export default CountDownTimer;