import React, { useState } from 'react'
import { questions } from '../../helpers/QuestionBank'
import style from '../questions/PlayQuestions.module.css'
import Timer from './Timer';


function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const onExpire = () => {
    setShowScore(true)
  }
  
  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true) {
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
    <div>
      {showScore === true?
        <>
          <div>You Scroced {score} out of {questions.length}</div>
          <a className={style.back} href='/'>Go Back</a>
        </>
        :
        <>
          <Timer duration={1 * 60 * 1000 } onExpire={onExpire} />
          <div>
            <div>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div>{questions[currentQuestion].questionText}</div>
          </div>
          <div>
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button key={answerOptions.answerText} onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default Questions