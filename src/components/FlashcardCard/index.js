import React from 'react' 

const FlashcardCard = ({ flip, handleFlip, currentQuestion}) => {
  return (
  <>
    <div className="flashcard-container" onClick={handleFlip}>
      <div className="flashcard-text">
        { flip ? <div className="front">
          { currentQuestion ? <><div>{currentQuestion.answer}</div><div>{currentQuestion.english}</div></> : `Loading...` }</div> : <div className="back">{ currentQuestion ? currentQuestion.question : `Loading...` }</div> 
        }
      </div>
    </div>
  </>
  )
}

export default FlashcardCard;