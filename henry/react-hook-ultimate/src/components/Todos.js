import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { TodoContext } from '../contexts/TodoContext'

const Todos = () => {
  const { todos } = useContext(TodoContext)

  return (
    <div className='todo-list'>
      <TodoForm />
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </div>
  )
}

export default Todos
