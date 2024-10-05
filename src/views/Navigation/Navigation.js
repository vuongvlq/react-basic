import React from "react"
import './Navigation.scss'

class Navigation extends React.Component {

  render() {
    return (
      <div className="topnav">
        <a class="active" href="/">Home</a>
        <a href="/todo">Todos</a>
        <a href="/about">About</a>
      </div>
    )
  }
}

export default Navigation