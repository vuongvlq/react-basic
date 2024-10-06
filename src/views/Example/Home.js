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

  handleDeleteUser = (user) => {
    console.log('user', user)
    this.props.deleteUserRedux(user)
  }

  handleCreateUser = () => {
    this.props.createUserRedux()
  }

  render() {
    let listUsers = this.props.dataRedux
    return (
      <>
        <div>
          Hello World from HomePage with
        </div>
        <div>
          <img src={imageSample} style={{ width: "500px", marginTop: "20px" }} alt="Sample" />
        </div>
        <div>
          {listUsers && listUsers.length > 0 &&

            listUsers.map((user, index) => {
              return (
                <div key={user.id}>
                  {index + 1} - {user.name}
                  &nbsp; <span onClick={() => this.handleDeleteUser(user)}>x</span>
                </div>
              )
            })
          }
          <button onClick={() => this.handleCreateUser()}>Add New</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
    createUserRedux: () => dispatch({ type: "CREATE_USER" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
