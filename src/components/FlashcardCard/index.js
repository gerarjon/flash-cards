import React from 'react' 

const FlashcardCard = ({ flip, handleFlip, currentQuestion, nextQuestionClick, index, questionList, reviewQuestionClick }) => {
  return (
  <>
    <div className="flashcard-container" onClick={handleFlip}>
          <div className="flashcard-text">
            { flip ? <div className="front">
              { currentQuestion ? <><div>{currentQuestion.answer}</div><div>{currentQuestion.english}</div></> : `Loading...` }</div> : <div className="back">{ currentQuestion ? currentQuestion.question : `Loading...` }</div> 
            }
          </div>
        </div>
        <div className="flashcard-button-container">
          <button className="button" onClick={nextQuestionClick}>{index < questionList.length ? 'Next Question' : 'Restart'}</button>
          {currentQuestion ? <button className="button" onClick={reviewQuestionClick}>trash</button> : ''}
    </div>
  </>
  )
}

export default FlashcardCard;