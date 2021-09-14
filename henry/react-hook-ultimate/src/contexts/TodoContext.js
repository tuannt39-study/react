import React, { createContext, useState, useEffect } from 'react'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    console.log('getting todos');
    const todos = localStorage.getItem('todos');
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, [])

  useEffect(() => {
    console.log('saving todos');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

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
