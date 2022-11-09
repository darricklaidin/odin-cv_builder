import React, { Component } from "react";
import Builder from "./components/Builder";
import CV from "./components/CV";
import style from "./css/App.module.css";

import Experience from "./classes/Experience";

class App extends Component {
  constructor() {
    super()
    this.state = {
      'experiences': [new Experience("Google", "Software Engineer", "Melbourne", "Australia", "20 November 2022", "30 December 2023")],
      'educations': [],
    }
  }
  
  buildCV() {
    return <CV />;
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Builder 
        experiences={this.state.experiences}
        educations={this.state.educations}
        />
      </div>
    )
  }
}

export default App;
