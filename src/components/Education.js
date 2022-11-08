import React, { Component } from "react"
import style from "../css/Education.module.css"

class Education extends Component {
  constructor() {
    super()
  }

  render() {
    return <div className={style.wrapper}>
        <h3>Education</h3>
      
        <div className={style.educationForm}>
          <input type="text" placeholder="University"></input>
          <input type="text" placeholder="Degree"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Country"></input>
          <input type="text" placeholder="Start date"></input>
          <input type="text" placeholder="End date"></input>
        </div>
        
        <div>
          <button>Add</button>
          <button>Delete</button>
        </div>
    </div>
  }
}

export default Education
