import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlashcardCard from '../FlashcardCard';
import SentenceCard from '../SentenceCard';
import './style.css';

// Shuffle function
const shuffle = (array) => {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const Flashcard = () => {
  const { subject } = useLocation().state;
  const questionArray = subject.card;
  const [questionList, setQuestionList] = useState(questionArray);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [index, setIndex] = useState(0);
  const [reviewQuestionList, setReviewQuestionList] = useState([])
  const [count, setCount] = useState(0);
  const [total] = useState(questionArray.length)

  // for FlashcardCard
  const [flip, setFlip] = useState(false);

  // for SentenceCard
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrect, setIsCorrect] = useState('')

  // Load questionArray on start
  useEffect(()=>{
    setQuestionList(shuffle(questionArray))
    setCurrentQuestion(questionList[0])
  },[]) // eslint-disable-line

  // go to next question function
  const nextQuestionClick = () => {
    if ( index >= 0 && index < questionList.length) {
      setCurrentQuestion(questionList[index + 1]);
      setIndex(index => index + 1);
      setCount(count => count + 1);
      setFlip(false)
      setIsCorrect('')
      setShowAnswer(false)
      setSubmittedAnswer('')
    } else if (reviewQuestionList.length > 0) {
      setCurrentQuestion(questionList[0]);
      setQuestionList(reviewQuestionList);
      setReviewQuestionList([]);
      setIndex(0);
      setFlip(false)
    } else {
      restartQuestionClick()
    }
  }

  // resets questionList, index, and sets currentQuestion to first question
  const restartQuestionClick = () => {
    let temp = shuffle(questionArray)
    setQuestionList(temp)
    setCurrentQuestion(temp[0])
    setIndex(0)
    setCount(0)
    setIsCorrect('')
    setFlip(false)
  }

  // adds current question to array of questions to review
  const reviewQuestionClick = () => {
    setReviewQuestionList(reviewQuestionList => [...reviewQuestionList, currentQuestion]);
    setCount(count => count - 1);
    nextQuestionClick();
  }

  // changes state of flip to opposite
  const handleFlip = () => {
    setFlip(!flip)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (submittedAnswer) {
      handleCheckAnswer(submittedAnswer)
      setShowAnswer(true)
    }
  }

  const handleCheckAnswer = (ans) => {
    let newAns = ans.replace(/[.,/#!$%^&*;:{}=\-_`~()@?]/g,"").replace(/\s{2,}/g," ").toLowerCase();
    let currentAns = currentQuestion.answer.replace(/[.,/#!$%^&*;:{}=\-_`~()@?]/g,"").replace(/\s{2,}/g," ").toLowerCase();
    if (newAns === currentAns) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  const handleAnswerOnChange = (e) => {
    setSubmittedAnswer(e.target.value)
  }

  return( 
    <div>
      <div className="hero is-small">
        <div className="hero-body">
          <p className="title">{subject.name}</p>
        </div>
      </div>
      <div className="flashcard">
        <progress className="progress is-success" value={count} max={total}>{count / total}</progress>
        { subject.type === "flashcard" ? 
        <FlashcardCard 
          flip={flip}
          handleFlip={handleFlip}
          currentQuestion={currentQuestion}
        /> :
        <SentenceCard
          currentQuestion={currentQuestion}
          handleFormSubmit={handleFormSubmit}
          handleAnswerOnChange={handleAnswerOnChange}
          showAnswer={showAnswer}
          isCorrect={isCorrect}
          submittedAnswer={submittedAnswer}
        />
        }
        <div className="flashcard-button-container">
          <button className="button" onClick={nextQuestionClick}>{index < questionList.length ? 'Next Card' : 'Restart'}</button>
          {currentQuestion ? <button className="button" onClick={reviewQuestionClick}>Set aside</button> : ''}
        </div>
      </div>
    </div>
  )
}

export default Flashcard;