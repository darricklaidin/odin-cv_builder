import React, { Component } from "react";
import Builder from "./components/Builder";
import CV from "./components/CV";
import style from "./css/App.module.css";

import Experience from "./classes/Experience";
import Education from "./classes/Education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      "experiences": [new Experience()],
      "educations": [new Education()],
      "isGenerated": false,
    };
    this.buildCV = this.buildCV.bind(this);
    this.onGenerateButtonClicked = this.onGenerateButtonClicked.bind(this);
  }
  
  buildCV() {
    if (this.state.isGenerated) {
      return <CV 
      experiences={this.state.experiences}
      educations={this.state.educations}
      />;
    }
  }
  
  onGenerateButtonClicked() {
    this.setState({
      "isGenerated": true,
    });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Builder 
        experiences={this.state.experiences}
        educations={this.state.educations}
        isGenerated={this.state.isGenerated}
        onGenerateButtonClicked={this.onGenerateButtonClicked}
        />
        {this.buildCV()}
      </div>
    )
  }
}

export default App;
