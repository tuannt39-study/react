import React from 'react'

const TodoItem = ({ todo }) => {
  const style = {
    background: 'rgb(240, 240, 240)',
    color: 'black'
  }

  console.log(todo);

  return (
    <li
      style={style}
    >
      {todo.title}
    </li>
  )
}

export default TodoItem
