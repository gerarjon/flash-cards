import React, { useState } from 'react';
import SubjectList from '../components/SubjectList';
import Data from '../data/appData.json'

const MainPage = () => {
  const [flashcards] = useState(Data)
    return(
      <>
        <div className="hero is-small">
          <div className="hero-body">
            <p className="title">Pick a Subject</p>
          </div>
        </div>
        <SubjectList subjectlist={flashcards} />
      </>
    )

}

export default MainPage;