import React, { Component } from "react";
import style from "../css/CVPersonalInformation.module.css"

class CVPersonalInformation extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h3>Personal Information</h3>
        <div className={style.content}>
          <p>{String(document.getElementById("firstName").value) + " " + String(document.getElementById("lastName").value)}</p>
          <p>{document.getElementById("occupation").value}</p>
          <p>{document.getElementById("email").value}</p>
        </div>
      </div>
    )
  }
}

export default CVPersonalInformation;