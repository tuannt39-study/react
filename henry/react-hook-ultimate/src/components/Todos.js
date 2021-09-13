import React, { useState } from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
  const [ todos, setTodos ] = useState([
    {id: 1, title: 'a1'},
    {id: 2, title: 'a2'},
    {id: 3, title: 'a3'},
  ])

  console.log(todos);

  return (
    <div className='todo-list'>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </div>
  )
}

export default Todos
