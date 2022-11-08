import React, { Component } from "react"
import style from "../css/Experience.module.css"

class Experience extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={style.wrapper}>
        <h3>Experience</h3>
        
        <div className={style.experienceForm}>
          <input type="text" placeholder="Role"></input>
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Country"></input>
          <input type="text" placeholder="Start Date"></input>
          <input type="text" placeholder="End Date"></input>
        </div>
        <div>
          <button>Add</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default Experience
