import React, { Component } from "react";
import style from "../css/CVExperience.module.css";

class CVExperience extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={style.wrapper}>
        <h3>
          Experience
        </h3>
        <div className={style.info}>
          <div className={style.content}>
            <p>Google</p>
            <p>Software Engineer</p>
            <p>20 November 2022 - 30 December 2023</p>
          </div>
          <div className={style.location}>
            <p>Melbourne, AU</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CVExperience;