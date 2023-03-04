import React from 'react'
import './todo.css';

export default function Todo({title}) {
  return (
    <div className='todoItem'>
        <span className="itemTitle">{title}</span>
        <button className="deleteTodo"><i class="fa-solid fa-trash" /></button>
        <button><i class="fa-regular fa-pen-to-square"/></button>
    </div>
  )
}
