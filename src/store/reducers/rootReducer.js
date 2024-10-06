const initState = {
  users: [
    { id: 1, name: 'user 1' },
    { id: 2, name: 'user 2' },
    { id: 3, name: 'user 3' }
  ]
}

const rootReducer = (state = initState, action) => {

  switch (action.type) {
    case "DELETE_USER":
      let users = state.users
      users = state.users.filter(user => user.id !== action.payload.id)
      return {
        ...state, users
      }
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 100000)
      let user = { id: id, name: `user ${id}` }
      return {
        ...state, users: [...state.users, user]
      }
    default:
      return state
  }
}

export default rootReducer
