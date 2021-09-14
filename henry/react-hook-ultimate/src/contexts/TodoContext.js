import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [ todos, setTodos ] = useState([
    {id: 1, title: 'a1'},
    {id: 2, title: 'a2'},
    {id: 3, title: 'a3'},
  ])

  const addTodo = todo => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const TodoContextData = {
    todos,
    addTodo,
    deleteTodo
  }

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
