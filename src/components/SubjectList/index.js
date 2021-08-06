import React from 'react';
import "./style.css"
import SubjectCard from '../SubjectCard';

const SubjectList = ( {subjectlist} ) => {

  return (
    <>
      <div className="subject-list-container">
        <div className="columns is-multiline is-mobile is-variable is-1-mobile">
            {
              subjectlist.map( subject => {
                return (
                 <div className="column is-one-quarter-tablet is-half-mobile" key={subject.id}>
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