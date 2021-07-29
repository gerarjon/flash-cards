import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Shuffle the question list and set to new array
  // useEffect(() => {
  //   const shuffledArray = shuffle(questionArray);
  //   setQuestionList(shuffledArray);
  // }, [])

  //Next Question on click
  const nextQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('thats the end');
    }
  }

  useEffect(() => {
    console.log(currentQuestion);
  }, [currentQuestion])

  return( 
    <div>
      <h3>name: {subject.name} </h3>
      <div>
        {questionList[currentQuestion].id}
      </div>
      <button onClick={() => nextQuestionClick()}>Next Question</button>
    </div>
  )
}

export default Flashcard;