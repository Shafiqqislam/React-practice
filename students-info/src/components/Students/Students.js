import React, { useState } from 'react';
import "./Students.css"

const Students = (props) => {
    const { pic, firstName, email, company, skill, grades } = props.student
   
    return (
      
            <div className="students-info">
                <div className="img-box">
                    <img src={pic} className="outer-shadow" alt="" />
                </div>
                <div className="students-details">
                    <h2>{firstName}</h2>
                    <p>Email : {email}</p>
                    <p>Company : {company}</p>
                    <p>Skill : {skill}</p>
                </div>
            </div>
    );
};

export default Students;