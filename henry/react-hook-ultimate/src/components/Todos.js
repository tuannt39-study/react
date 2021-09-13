import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const Todos = () => {
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

  return (
    <div className='todo-list'>
      <TodoForm addTodo={addTodo} />
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}
    </div>
  )
}

export default Todos
