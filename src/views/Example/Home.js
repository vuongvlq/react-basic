import React from "react"
// import { withRouter } from "react-router"
import Color from "../HOC/Color"
import imageSample from "../../assets/images/picture1.png"
import { connect } from "react-redux"

class Home extends React.Component {

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push('/todo')
    // }, 3000)
  }
  render() {
    return (
      <>
        <div>
          Hello World from HomePage with
        </div>
        <div>
          <img src={imageSample} style={{ width: "500px", marginTop: "20px" }} alt="Sample" />
        </div>
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}

export default connect(mapStateToProps)(Color(Home));
