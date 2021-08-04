import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css'

// Shuffle function
// const shuffle = (array) => {
//   var currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }
//   return array;
// }


const Flashcard = () => {
  const location = useLocation();
  const { subject } = location.state;
  const questionArray = subject.card;
  const [questionList, setQuestionList] = useState(questionArray);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const initialState = getRandomQuestion(questionList);
    return initialState;
  });
  const [counter, setCounter] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setQuestionList(questionArray.map((questionItem, index) => {
      return {
        id: questionItem.id,
        question: questionItem.question,
        answer: questionItem.answer
      }
    }))
  }, [])

  useEffect(() => {
    console.log(currentQuestion)
  }, [currentQuestion]);

  const nextQuestionClick = () => {
    if ( counter < questionList.length) {
      console.log(questionList.length)
      setCounter(counter + 1);
      setCurrentQuestion(getRandomQuestion(questionList));
      setFlip(false);
      console.log(counter);
    } else {
      
      setCounter(0);
    }
  }

  return( 
    <div>
      <div className="subject-title">
        <h3>{subject.name} </h3>
      </div>
      <div className="flashcard">
        <div className="flashcard-container" onClick={() => setFlip(!flip)}>
          <div className="flashcard-text">
            {flip ? currentQuestion.answer : currentQuestion.question}
          </div>
        </div>
        <div className="flashcard-button-container">
          <button onClick={nextQuestionClick}>{counter < questionList.length ? 'Next Question' : 'Restart'}</button>
        </div>
      </div>
    </div>
  )
}

// const sampleArray = [
//   {
//     id: 1, 
//     question: 'There is currently no Question',
//     answer: '!'
//   },
// ]

// Get RandomCard function
const getRandomQuestion = (currentQuestions) => {
  const question = currentQuestions[Math.floor(Math.random() * currentQuestions.length)];
  return(question);
} 


export default Flashcard;