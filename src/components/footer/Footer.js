import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import style from '../footer/Footer.module.css'

function Footer() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
      setOpen(!open);
  };
  return (
    <div>
       {open ? 
          <div>
            <div className={style.containerQuiz} >
              <h1 className={style.quizh1}>Quiz Rules</h1>
              <div>
                <span> <Image className={style.img} src="../../clock.png" rounded /></span>
                <span>
                  <span>
                   <span className={style.head}> 1 Mins</span>
                    <p className={style.details}>
                      Keep in mind that its a time-bound quiz.
                    </p>
                  </span> 
                </span>
              </div>
              <div>
                <span><Image className={style.img} src="../../question.png" rounded /></span>
                <span>
                  <span>
                   <span className={style.head}> 5 Questions</span>
                    <p className={style.details}>
                      We believe that you will ace it !
                    </p>
                  </span> 
                </span>
              </div>
              <div>
                <span><Image className={style.img} src="../../medal.png" rounded /></span>
                <span>
                  <span>
                   <span className={style.head}> 50% Passing Criteria</span>
                    <p className={style.details}>
                      All the best! See you on the other side.
                    </p>
                  </span> 
                </span>
              </div>
              <p className={style.instruction}>This quiz can only be attempted once daily.</p>
              <a onClick={toggle} className={style.startQuiz} href="/questions">Start Quiz</a>
            </div>
          </div>
          : 
           <div className={style.container} >
            <button onClick={toggle} className={style.btnprimary}>Take Quiz</button>
          </div>
          }
       
    </div>
  )
}

export default Footer