import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css'

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

  // Load questionArray on start
  useEffect(()=>{
    setQuestionList(shuffle(questionArray))
    setCurrentQuestion(questionList[0])
  },[])

  useEffect(() => {
    console.log(questionList);
    console.log(currentQuestion)
    console.log(reviewQuestionList)
    console.log(index)
  }, [questionList, currentQuestion, reviewQuestionList, index]);

  const nextQuestionClick = () => {
    let i = questionList.indexOf(questionList[index])

    if ( i >= 0 && i < questionList.length) {
      setCurrentQuestion(questionList[i + 1]);
      setIndex(index => index + 1)
      setFlip(false);
    } else {
      setQuestionList(reviewQuestionList)
      setReviewQuestionList([])
      setFlip(false);
    }
  }

  // Sets questionList with fresh array
  const restartQuestionClick = () => {
    setQuestionList(shuffle(questionArray));
  }

  const reviewQuestionClick = () => {
    setReviewQuestionList(reviewQuestionList => [...reviewQuestionList, currentQuestion])
    nextQuestionClick();
  }

  return( 
    <div>
      <div className="hero is-small">
        <div className="hero-body">
          <p className="title">{subject.name}</p>
        </div>
      </div>
      <div className="flashcard">
        <div className="flashcard-container" onClick={() => setFlip(!flip)}>
          <div className="flashcard-text">
            {flip ? <div className="front">{ currentQuestion ? currentQuestion.answer : `Loading...`}</div> : <div className="back">{ currentQuestion ? currentQuestion.question : `Loading...`}</div>}
          </div>
        </div>
        <div className="flashcard-button-container">
          <button className="button" onClick={nextQuestionClick}>{index < questionList.length ? 'Next Question' : 'Restart'}</button>
          <button className="button" onClick={reviewQuestionClick}>trash</button>
        </div>
      </div>
    </div>
  )
}

export default Flashcard;