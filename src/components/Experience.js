import React, { Component } from "react"
import style from "../css/Experience.module.css"
import ExperienceObject from "../classes/Experience";

class Experience extends Component {
  constructor() {
    super()
    this.addNewExperience = this.addNewExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNewExperience() {
    // Add an empty experience to experiences
    let newExperience = new ExperienceObject()
    this.props.experiences.push(newExperience);
    this.setState({});
  }
  
  deleteExperience() {
    // Delete the latest experience
    this.props.experiences.pop();
    this.setState({});
  }
  
  handleChange(e) {
    // Find experience with id
    let experience = this.props.experiences.find((experience) => { return experience.id === e.target.parentElement.getAttribute("propskey") });
    // Update experience with id
    switch(e.target.name) {
      case "company":
        experience.company = e.target.value;
        break;
      case "jobTitle":
        experience.jobTitle = e.target.value;
        break;
      case "city":
        experience.city = e.target.value;
        break;
      case "country":
        experience.country = e.target.value;
        break;
      case "startDate":
        experience.startDate = e.target.value;
        break;
      case "endDate":
        experience.endDate = e.target.value;
        break;
      default:
        break;
    }
    // Update state
    this.setState({});
  }
  
  render() {
    const { experiences } = this.props;
    
    return (
      <div className={style.wrapper}>
        <h3>Experience</h3>
        
        {experiences.map((experience) => {
          return (
            <div className={style.experienceForm} key={experience.id} propskey={experience.id}>
              <input onChange={this.handleChange} type="text" value={experience.company} name="company" placeholder="Company"></input>
              <input onChange={this.handleChange} type="text" value={experience.jobTitle} name="jobTitle" placeholder="Job Title"></input>
              <input onChange={this.handleChange} type="text" value={experience.city} name="city" placeholder="City"></input>
              <input onChange={this.handleChange} type="text" value={experience.country} name="country" placeholder="Country"></input>
              <input onChange={this.handleChange} type="text" value={experience.startDate} name="startDate" placeholder="Start Date"></input>
              <input onChange={this.handleChange} type="text" value={experience.endDate} name="endDate" placeholder="End Date"></input>
            </div>
          )
        })}
        
        <div>
          <button onClick={this.addNewExperience}>Add</button>
          <button onClick={this.deleteExperience}>Delete</button>
        </div>
        
      </div>
    )
  }
}

export default Experience
