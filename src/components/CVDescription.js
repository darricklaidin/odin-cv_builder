import React, { Component } from "react";

class CVDescription extends Component {
  
  render() {
    
    return (
      <div>
        <h3>
          Description
        </h3>
        <div>
          <p>{document.getElementById("description").value}</p>
        </div>
      </div>
    )
  }
}

export default CVDescription;