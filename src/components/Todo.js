import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo, deleteTodo } from "../actions/todoActions"

const Todo = () => {
  const [todoText, setTodoText] = React.useState("")
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleInputChange = e => {
    setTodoText(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText))
      setTodoText("")
    }
  }

  const handleTodoToggle = id => {
    dispatch(toggleTodo(id))
  }

  const handleTodoDelete = id => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="container mt-4">
      <h2>Add Todo</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-md-9">
            <input type="text" className="form-control" value={todoText} onChange={handleInputChange} placeholder="Enter your todo" />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary btn-block">
              Add Todo
            </button>
          </div>
        </div>
      </form>
      {todos.length > 0 ? (
        <ul className="list-group mt-4 mb-4">
          {todos.map(todo => (
            <li key={todo.id} className="list-group-item d-flex align-items-center gap-2">
              <input type="checkbox" checked={todo.completed} onChange={() => handleTodoToggle(todo.id)} className="mr-3" />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleTodoDelete(todo.id)} className="btn btn-danger ml-auto">
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No todos yet.</p>
      )}
    </div>
  )
}

export default Todo
