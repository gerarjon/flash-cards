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
  const [flip, setFlip] = useState(false);
  const [reviewQuestionList, setReviewQuestionList] = useState([])
  const [count, setCount] = useState(0);
  const [total] = useState(questionArray.length)

  // Load questionArray on start
  useEffect(()=>{
    setQuestionList(shuffle(questionArray))
    setCurrentQuestion(questionList[0])
  },[])

  // useEffect(() => {
  //   console.log(questionList);
  //   console.log(questionList.length)
  //   console.log(currentQuestion)
  //   console.log(reviewQuestionList)
  //   console.log(index)
  // }, [questionList, currentQuestion, reviewQuestionList, index]);

  const nextQuestionClick = () => {
    let i = questionList.indexOf(questionList[index])

    if ( i >= 0 && i < questionList.length) {
      setCurrentQuestion(questionList[i + 1]);
      setIndex(index => index + 1)
      setCount(count => count + 1)
      setFlip(false);
    } else if (reviewQuestionList.length > 0) {
      setQuestionList(reviewQuestionList);
      setReviewQuestionList([]);
      setCurrentQuestion(questionList[0]);
      setIndex(0);
      setFlip(false);
    } else {
      restartQuestionClick()
    }
  }

  // resets questionList, index, and sets currentQuestion to first question
  const restartQuestionClick = () => {
    setQuestionList(shuffle(questionArray));
    setCurrentQuestion(questionList[0])
    setIndex(0)
    setCount(0)
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
          nextQuestionClick={nextQuestionClick}
          index={index}
          questionList={questionList}
          reviewQuestionClick={reviewQuestionClick}
        /> :
        <SentenceCard
          currentQuestion={currentQuestion}
        />
        }
      </div>
    </div>
  )
}

export default Flashcard;