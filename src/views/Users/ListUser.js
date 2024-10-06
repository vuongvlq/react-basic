import React from "react"
import axios from "axios"
import './ListUser.scss'
import { withRouter } from "react-router-dom"

class ListUser extends React.Component {

  state = {
    listUsers: []
  }

  async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=2')
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  handleShowUserDetail = (user) => {
    this.props.history.push(`/user/${user.id}`)
  }

  render() {
    let { listUsers } = this.state
    return (
      <div className="list-user-container">
        <div className="list-user-content">
          {listUsers && listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <div className="child" key={user.id}
                  onClick={() => this.handleShowUserDetail(user)}
                >
                  {index + 1} - {user.first_name} {user.last_name}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(ListUser)
