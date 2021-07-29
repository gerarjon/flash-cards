import React from 'react';
import "./style.css"

const SubjectList = ( {subjectlist} ) => {

  return (
    <>
      <div className="subject-title">
        <p>Subjects</p>
      </div>
      <div className="subject-list-container">
        <div className="columns is-multiline">
          {
            subjectlist.map( subject => (
              <div className="column is-one-quarter card subject-card" key={subject.id}>
                <div className="card-content">
                  <p>{subject.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SubjectList;