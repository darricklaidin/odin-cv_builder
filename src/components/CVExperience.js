import React, { Component } from "react";
import style from "../css/CVExperience.module.css";

class CVExperience extends Component {
  
  render() {
    const { experiences } = this.props;
    
    return (
      <div className={style.wrapper}>
        <h3>
          Experience
        </h3>
        
        <div className={style.infoWrapper}>
          {experiences.map((experience) => {
            return (
              <div className={style.info} key={experience.id}>
                <div className={style.content}>
                  <p>{experience.company}</p>
                  <p>{experience.jobTitle}</p>
                  <p>{experience.startDate} - {experience.endDate}</p>
                </div>
                <div className={style.location}>
                  <p>{experience.city}, {experience.country}</p>
                </div>
              </div>
            )
          })}
        </div>
        
      </div>
    )
  }
}

export default CVExperience;