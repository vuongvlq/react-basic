import React from 'react'
import './ListTodo.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'Cooking' },
      { id: 'todo3', title: 'Reading' }
    ],
    editTodo: {}
  }

  addNewTodo = (todo) => {
    // let currentListTodos = this.state.listTodos
    // currentListTodos.push(todo)
    this.setState({
      listTodos: [...this.state.listTodos, todo]
      // listTodos: currentListTodos
    })
    toast.success("Wow so easy!");

  }

  handleDeleteTodo = (todo) => {
    let currentListTodos = this.state.listTodos
    currentListTodos = currentListTodos.filter((item => item.id !== todo.id))
    this.setState({
      listTodos: currentListTodos
    })
    toast.success("Delete success!")
  }

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state
    let isEditTodoEmpty = Object.keys(editTodo).length === 0

    //save 
    if (isEditTodoEmpty === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos]
      let index = listTodosCopy.findIndex(item => item.id === todo.id)
      listTodosCopy[index].title = editTodo.title
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {}
      })
      toast.success("Edit success!")
      return

    }
    this.setState({
      editTodo: todo
    })
  }

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo }
    editTodoCopy.title = event.target.value
    this.setState({
      editTodo: editTodoCopy
    })
  }

  render() {
    let { listTodos, editTodo } = this.state
    // let listTodos = this.state.listTodos
    let isEditTodoEmpty = Object.keys(editTodo).length === 0

    return (
      <>
        <p>Simple Todo App with React</p>
        <div className="list-todo-container">
          <AddTodo
            addNewTodo={this.addNewTodo}
          />
          <div className="list-todo-content">
            {listTodos && listTodos.length > 0 &&
              listTodos.map((todo, index) => {
                return (
                  <div className="todo-child" key={todo.id}>
                    {isEditTodoEmpty === true ?
                      <span> {index + 1} - {todo.title} </span>
                      :
                      <>
                        {editTodo.id === todo.id ?
                          <span>
                            {index + 1} - <input
                              value={editTodo.title}
                              onChange={(event) => this.handleOnChangeEditTodo(event)}
                            />
                          </span>
                          :
                          <span> {index + 1} - {todo.title} </span>
                        }
                      </>
                    }
                    <button className="edit"
                      onClick={() => this.handleEditTodo(todo)}
                    >
                      {isEditTodoEmpty === false && editTodo.id === todo.id ? 'Save' : 'Edit'}
                    </button>
                    <button className="delete"
                      onClick={() => this.handleDeleteTodo(todo)}
                    >Delete</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default ListTodo