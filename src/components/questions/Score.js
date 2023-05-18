import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from '../../utils/WindowSize';
import { Link } from "react-router-dom";
import style from '../questions/PlayQuestions.module.css'

function Score({score, questions}) {
    const { width, height } = useWindowSize();
  return (
    <div>
         <div className={style.score}>
            <Confetti
              width={width}
              height={height}
            />
            <span className={style.scoreDetail}>You Scored {score} out of {questions.length}</span>
          </div>
          <div className={style.btnBack} >
                <button onClick={() => {
                }} 
                className={style.goback}>
                  <Link replace={true} className={style.back} to='/'>Go Back</Link>
                </button>
          </div>
    </div>
  )
}

export default Score