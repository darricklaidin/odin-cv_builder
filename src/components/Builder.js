import React, { Component } from "react"
import PersonalInformation from "./PersonalInformation"
import Experience from "./Experience"
import Education from "./Education"
import style from "../css/Builder.module.css"

class Builder extends Component {

  render() {
    const { experiences, educations, onGenerateButtonClicked } = this.props;
    return (
      <div className={style.wrapper}>
        <PersonalInformation />
        <Experience experiences={experiences}/>
        <Education educations={educations}/>
        <button onClick={onGenerateButtonClicked}>Generate</button>
      </div>
    )
  }
}

export default Builder;
