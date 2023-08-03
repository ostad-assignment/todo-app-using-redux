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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todoText} onChange={handleInputChange} placeholder="Enter your todo" />
        <button type="submit">Add Todo</button>
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => handleTodoToggle(todo.id)} />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos yet.</p>
      )}
    </div>
  )
}

export default Todo
