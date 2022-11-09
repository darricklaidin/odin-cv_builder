import React, { Component } from "react";
import style from "../css/CVPersonalInformation.module.css"

class CVPersonalInformation extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h3>Personal Information</h3>
        <div className={style.content}>
          <p>Donkey Kong</p>
          <p>Software Engineer</p>
          <p>dkong@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default CVPersonalInformation;