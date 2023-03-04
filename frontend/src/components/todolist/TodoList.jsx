import React from 'react'

export default function TodoList() {
  return (
    <section>
        <div className='todoWrapper'>
            <input type="text" placeholder='Enter todo item' className="todoInput" />
            <ul className='todoList'>
                <li className="todoItem">gym</li>
                <li className="todoItem">meeting</li>
                <li className="todoItem">assignment</li>
            </ul>
        </div>
    </section>
  )
}
