import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext)
  const { deleteTodo } = useContext(TodoContext)

  const { isLightTheme, light, dark } = theme

  const style = isLightTheme ? light : dark

  return (
    <li
      style={style}
      onClick={() => deleteTodo(todo.id)}
    >
      {todo.title}
    </li>
  )
}

export default TodoItem
