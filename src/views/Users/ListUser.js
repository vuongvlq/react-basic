import React from "react"
import axios from "axios"
import './ListUser.scss'

class ListUser extends React.Component {

  state = {
    listUsers: []
  }

  async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=2')
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
    })
    console.log(this.state.listUsers)
  }

  render() {
    let { listUsers } = this.state
    return (
      <div className="list-user-container">
        <div className="list-user-copntent">
          {listUsers && listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <div className="child" key={user.id}>
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

export default ListUser
