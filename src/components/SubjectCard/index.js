import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

export default function SubjectCard( {subject} ) {
  const newTo = {
    pathname: "/" + subject.name,
    state: {
      subject: subject
    }
  }

  return (
    <div className="column is-one-quarter card subject-card">
      <Link to={newTo}>
        <div className="card-content">
          <p>{subject.name}</p>
        </div>
      </Link>
    </div>
  )
}