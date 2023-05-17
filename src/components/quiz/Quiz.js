import React from 'react'
import Image from 'react-bootstrap/Image';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation'
import style from '../quiz/Quiz.module.css'
import CommentRatting from './CommentRating';
import QuizDetails from './QuizDetails';

function Quiz() {
  return (
    <div>
        <Navigation />
        <Image className={style.img} src="../../quiz.webp" rounded />
        <div className={style.container}>
          <h1 className={style.heading}>The Daily MS Excel Quiz</h1>
          <CommentRatting />
          <QuizDetails />
        </div>
       
        <Footer />
    </div>
  )
}

export default Quiz