import React from 'react';
import "./style.css"
import SubjectCard from '../SubjectCard';

const SubjectList = ( {subjectlist} ) => {

  return (
    <>
      <div className="subject-list-container">
        <div className="columns is-multiline">
            {
              subjectlist.map( subject => {
                return (
                 <div className="column is-one-quarter" key={subject.id}>
                  <SubjectCard subject={subject} />
                 </div> 
                 )
              })
            }
        </div>
      </div>
    </>
  )
}

export default SubjectList;