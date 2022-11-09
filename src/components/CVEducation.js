import React, { Component } from "react";
import style from "../css/CVEducation.module.css";

class CVEducation extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={style.wrapper}>
        <h3>
          Education
        </h3>
        <div className={style.info}>
          <div className={style.content}>
            <p>RMIT University</p>
            <p>Bachelors of Software Engineering</p>
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

export default CVEducation;