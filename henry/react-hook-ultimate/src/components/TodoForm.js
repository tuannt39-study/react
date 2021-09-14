import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from '../contexts/ThemeContext'

const TodoForm = ({addTodo}) => {
  // Load context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

  // For this component only
  const [title, setTitle] = useState('')

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTodo({
      id: uuidv4(),
      title
    })
    setTitle('')
  }

  // Style
  const style = isLightTheme ? light : dark

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Enter a new todo...'
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type='submit' value='Add' style={style} />
    </form>
  )
}

export default TodoForm
