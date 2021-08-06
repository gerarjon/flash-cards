import React from 'react'
import './style.css'

const SentenceCard = ({ currentQuestion }) => {
  return(
    <div className="flashcard-submit-container columns is-multiline">
      <div className="flashcard-submit-question column is-full">
        {currentQuestion ? currentQuestion.question : 'Loading...'}
      </div>
      <div className="flashcard-submit-answer column is-full">
        {currentQuestion ? currentQuestion.answer : ''}
      </div>
      <div className="flashcard-submit-form column is-full">
        <div className="field">
          <label className="label">Translate in English</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g. I am Takeshi" />
          </div>
        </div>
        <div className="field">
          <div className="control">
              <button className="button is-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SentenceCard;
