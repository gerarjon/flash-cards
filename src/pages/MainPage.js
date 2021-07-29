import React, { useState } from 'react';
import SubjectList from '../components/SubjectList';
import Data from '../data/appData.json'

const MainPage = () => {
  const [flashcards] = useState(Data)
  
    return(
      <SubjectList subjectlist={flashcards} />
    )

}

export default MainPage;