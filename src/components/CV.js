import React, { Component } from "react";
import style from "../css/CV.module.css"
import CVDescription from "./CVDescription";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";
import CVPersonalInformation from "./CVPersonalInformation";

class CV extends Component {
  
  render() {
    const { experiences, educations } = this.props;
    
    return (
      <div className={style.wrapper}>
        <div className={style.mainContent}>
          <CVDescription />
          <CVExperience experiences={experiences}/>
          <CVEducation educations={educations}/>
        </div>
        <aside className={style.sideContent}>
          <CVPersonalInformation />
        </aside>
      </div>
    )
  }
}

export default CV;