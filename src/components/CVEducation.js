import React, { Component } from "react";
import style from "../css/CVEducation.module.css";

class CVEducation extends Component {
  
  render() {
    const { educations } = this.props;
    
    return (
      <div className={style.wrapper}>
        <h3>
          Education
        </h3>
        
        <div className={style.infoWrapper}>
          {educations.map((education) => {
            return (
              <div className={style.info} key={education.id}>
                <div className={style.content}>
                  <p>{education.university}</p>
                  <p>{education.degree}</p>
                  <p>{education.startDate} - {education.endDate}</p>
                </div>
                <div className={style.location}>
                  <p>{education.city}, {education.country}</p>
                </div>
              </div>
            )
          })}
        </div>
        
      </div>
    )
  }
}

export default CVEducation;