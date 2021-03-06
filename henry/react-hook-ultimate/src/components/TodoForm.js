import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'
import { ADD_TODO } from '../reducers/Types'

const TodoForm = () => {
  const { theme } = useContext(ThemeContext)
  const { dispatch } = useContext(TodoContext)
  const { isAuthenticated } = useContext(AuthContext)

  const { isLightTheme, light, dark } = theme

  const [title, setTitle] = useState('')

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isAuthenticated) {
      dispatch({
        type: ADD_TODO,
        payload: {
          todo: {
            id: uuidv4(),
            title
          }
        }
      })
    }
    setTitle('')
  }

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
