import React, { Component } from "react";
import style from "../css/Education.module.css";
import EducationObject from "../classes/Education";

class Education extends Component {
  constructor() {
    super();
    this.addNewEducation = this.addNewEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNewEducation() {
    let newEducation = new EducationObject();
    this.props.educations.push(newEducation);
    this.setState({});
  }
  
  deleteEducation() {
    this.props.educations.pop();
    this.setState({});
  }
  
  handleChange(e) {
    // Find education with id
    let education = this.props.educations.find((education) => { return education.id === e.target.parentElement.getAttribute("propskey") });
    // Update education with id
    switch(e.target.name) {
      case "university":
        education.university = e.target.value;
        break;
      case "degree":
        education.degree = e.target.value;
        break;
      case "city":
        education.city = e.target.value;
        break;
      case "country":
        education.country = e.target.value;
        break;
      case "startDate":
        education.startDate = e.target.value;
        break;
      case "endDate":
        education.endDate = e.target.value;
        break;
      default:
        break;
    }
    // Update state
    this.setState({});
  }
  
  render() {
    const { educations } = this.props;
    
    return <div className={style.wrapper}>
        <h3>Education</h3>
      
        {educations.map((education) => {
          return (
            <div className={style.educationForm} key={education.id} propskey={education.id}>
              <input onChange={this.handleChange} type="text" value={education.university} name="university" placeholder="University"></input>
              <input onChange={this.handleChange} type="text" value={education.degree} name="degree" placeholder="Degree"></input>
              <input onChange={this.handleChange} type="text" value={education.city} name="city" placeholder="City"></input>
              <input onChange={this.handleChange} type="text" value={education.country} name="country" placeholder="Country"></input>
              <input onChange={this.handleChange} type="text" value={education.startDate} name="startDate" placeholder="Start Date"></input>
              <input onChange={this.handleChange} type="text" value={education.endDate} name="endDate" placeholder="End Date"></input>
            </div>
          )
        })}
        
        <div>
          <button onClick={this.addNewEducation}>Add</button>
          <button onClick={this.deleteEducation}>Delete</button>
        </div>
        
    </div>
  }
}

export default Education
