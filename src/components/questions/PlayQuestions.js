import React, { useState } from 'react'
import { questions } from '../../helpers/QuestionBank'
import useWindowSize from '../../utils/WindowSize';
import Confetti from 'react-confetti'
import style from '../questions/PlayQuestions.module.css'
import Timer from './Timer';


function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [Index, setIndex] = useState(-1);
  const [activeBtn, setActiveBtn] = useState(false)
  const { width, height } = useWindowSize();

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
    setIndex(-1);
    
  };

  return (
    <div >
      {showScore === true?
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
              {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
                <div key={answerOptions.answerText} 
                  onClick={() => {
                  setAnswer(answerOptions.isCorrect);
                  setIndex(index)
                  setActiveBtn(true)
                }}
                style={{background: Index === index ? '#72c796' : 'white'}}
                className={style.answerOptions}
                >{answerOptions.answerText}</div>
              ))}
            </div>
            {currentQuestion === 4 ?
              <div className={style.btn} >
              <button  onClick={() =>{
                 handleAnswerButtonClick();
                 setActiveBtn(false)
                }} 
                style={{backgroundColor: activeBtn === true ? '#8031a7' : '#b471d5'}}
                className={style.btnprimary}
                >Submit</button>
              </div>
            :
              <div className={style.btn} >
                <button onClick={() => {
                 handleAnswerButtonClick();
                 setActiveBtn(false)
                }} 
                style={{backgroundColor: activeBtn === true ? '#8031a7' : '#b471d5'}}
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