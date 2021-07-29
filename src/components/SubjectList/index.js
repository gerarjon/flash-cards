import React from 'react';
import "./style.css"
import SubjectCard from '../SubjectCard';

const SubjectList = ( {subjectlist} ) => {

  return (
    <>
      <div className="subject-title">
        <p>Subjects</p>
      </div>
      <div className="subject-list-container">
        <div className="columns is-multiline">
          {
            subjectlist.map( subject => {
              return <SubjectCard subject={subject} key={subject.id} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default SubjectList;