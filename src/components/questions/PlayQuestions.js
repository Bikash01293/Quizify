import React, { useState } from 'react'
import { questions } from '../../helpers/QuestionBank'
import style from '../questions/PlayQuestions.module.css'
import Timer from './Timer';


function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [btnColor, setBtnColor] = useState("white");

  const onExpire = () => {
    setShowScore(true)
  }
  
  const handleAnswerButtonClick = () => {
    if(answer === true) {
      setScore(score + 1);
     
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    } else {
      setShowScore(true);
    }
    
  };
  return (
    <div >
      {showScore === true?
        <div>
          <div className={style.score}>
            <span className={style.scoreDetail}>You Scroced {score} out of {questions.length}</span>
          </div>
          <div className={style.btn} >
                <button onClick={() => {
                }} 
                className={style.goback}>
                  <a className={style.back} href='/'>Go Back</a>
                </button>
              </div>
          
        </div>
        :
        <div className={style.mainContainer}>
          <div >
            <div className={style.container}>
              <span className={style.question}>{currentQuestion + 1}/{questions.length}</span>
              <span className={style.timer}><Timer duration={1 * 60 * 1000 } onExpire={onExpire} /></span>
            </div>
            <div className={style.questionText}>
              <div >{questions[currentQuestion].questionText}</div>
              <div className={style.answer}>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button key={answerOptions.answerText} onClick={() => {
                  setAnswer(answerOptions.isCorrect);
                  btnColor === "white" ? setBtnColor("green") : setBtnColor("white");
                }}
                style={{ backgroundColor: btnColor }}
                className={style.answerOptions}
                >{answerOptions.answerText}</button>
              ))}
            </div>
            {currentQuestion === 4 ?
              <div className={style.btn} >
              <button  onClick={() =>{
                 handleAnswerButtonClick();
                }} 
                className={style.btnprimary}
                >Submit</button>
              </div>
            :
              <div className={style.btn} >
                <button onClick={() => {
                 handleAnswerButtonClick();
                }} 
                className={style.btnprimary}>Next</button>
              </div>

            }
            </div>
          </div>
          
        </div>
      }
    </div>
  )
}

export default Questions