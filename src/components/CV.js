import React, { Component } from "react";
import style from "../css/CV.module.css"
import CVDescription from "./CVDescription";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";
import CVPersonalInformation from "./CVPersonalInformation";

class CV extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.mainContent}>
          <CVDescription />
          <CVExperience />
          <CVEducation />
        </div>
        <aside className={style.sideContent}>
          <CVPersonalInformation />
        </aside>
      </div>
    )
  }
}

export default CV;