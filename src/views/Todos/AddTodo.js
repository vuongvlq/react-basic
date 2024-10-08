import React from "react"
import { toast } from 'react-toastify'

class AddTodo extends React.Component {
  state = {
    title: ''
  }

  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleClickAddTodo = () => {
    if (!this.state.title) {
      toast.error("Title is required!")
      return
    }

    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title
    }

    this.props.addNewTodo(todo)
    this.setState({
      title: ''
    })
  }
  render() {
    let { title } = this.state
    return (
      < div className="add-todo" >
        <input type="text" value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        <button type="button" className="add"
          onClick={() => this.handleClickAddTodo()}
        >Add</button>
      </div >)
  }
}

export default AddTodo