import React, { Component } from "react"
import style from "../css/PersonalInformation.module.css"

class PersonalInformation extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={style.wrapper}>
        <h3>Personal Information</h3>
        
        <div className={style.personalInformationForm}>
          <input type="text" id="firstName" placeholder="First Name"></input>
          <input type="text" id="lastName" placeholder="Last Name"></input>
          <input type="text" id="occupation" placeholder="Occupation"></input>
          <input type="text" id="email" placeholder="E-mail"></input>
          <input type="text" id="description" placeholder="Description"></input>
        </div>
      </div>
    )
  }
}

export default PersonalInformation
