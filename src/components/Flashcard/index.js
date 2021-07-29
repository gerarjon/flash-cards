import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';


const Flashcard = () => {
  const location = useLocation();
  const { subject } = location.state;
  const [question, setQuestion] = useState(null);
  console.log(JSON.stringify(subject));

  return( 
    <div>
      <h3>name: {subject.name} </h3>
      <div>
        {subject.card.map( result => (
          result.question
        ))}
      </div>
    </div>
  )
}

export default Flashcard;