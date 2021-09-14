import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const TodoItem = ({ todo, deleteTodo }) => {
  // Load Context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

  // Style
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
