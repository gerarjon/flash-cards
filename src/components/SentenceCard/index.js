import React from 'react'
import './style.css'

const SentenceCard = ({ currentQuestion, handleFormSubmit, handleAnswerOnChange, showAnswer, isCorrect, submittedAnswer }) => {
  return(
    <div className="flashcard-submit-container columns is-multiline">
      <div className="flashcard-submit-question column is-full">
        {currentQuestion ? currentQuestion.question : 'Loading...'}
      </div>
      <div className="flashcard-submit-answer column is-full">
        {currentQuestion && showAnswer ? currentQuestion.answer : ''}
      </div>
      
      <form className="flashcard-submit-form column is-full" onSubmit={handleFormSubmit}>
        <div className="field">
          <label className="label">Translate to English</label>
          <div className="control">
            <input className={`input ${isCorrect === true ? "is-success" : `${isCorrect === false ? "is-danger" : ""}` }`} type="text" onChange={handleAnswerOnChange} value={submittedAnswer} placeholder="e.g. I am Takeshi" />
          </div>
        </div>
        <div className="field">
          <div className="control">
              <button className="button is-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SentenceCard;
