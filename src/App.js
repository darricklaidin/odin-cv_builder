import React, { Component } from "react"
import Builder from "./components/Builder"
import style from "./css/App.module.css"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Builder />
      </div>
    )
  }
}

export default App
