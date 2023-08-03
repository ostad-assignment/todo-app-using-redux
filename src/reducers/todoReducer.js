const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const updatedTodosAdd = [...state.todos, action.payload]
      saveTodosToLocalStorage(updatedTodosAdd)
      return {
        ...state,
        todos: updatedTodosAdd
      }
    case "TOGGLE_TODO":
      const updatedTodosToggle = state.todos.map(todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo))
      saveTodosToLocalStorage(updatedTodosToggle)
      return {
        ...state,
        todos: updatedTodosToggle
      }
    case "DELETE_TODO":
      const updatedTodosDelete = state.todos.filter(todo => todo.id !== action.payload)
      saveTodosToLocalStorage(updatedTodosDelete)
      return {
        ...state,
        todos: updatedTodosDelete
      }
    default:
      return state
  }
}

const saveTodosToLocalStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

export default todoReducer
