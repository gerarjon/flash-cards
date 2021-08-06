import React from 'react'

const SentenceCard = ({ currentQuestion }) => {
  return(
    <div>
      {currentQuestion ? currentQuestion.question : ''}
    </div>
  )
}

export default SentenceCard;
