import React from "react";
import Todo from "../todo/Todo";
import "./todolist.css";

const todos = [
  { id: 1, title: "Gym" },
  { id: 2, title: "Meeting" },
  { id: 2, title: "Office" },
  { id: 4, title: "Reading" },
];
function TodoForm() {
  return (
    <form className="inputWrapper" onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder="Enter todo item" className="todoInput" />
      <button type="submit" className="addTodo">
        Add
      </button>
    </form>
  );
}
export default function TodoList() {
  return (
    <section>
      <div className="todoWrapper">
        <h1 className="todoTitle">Todo-App</h1>
        <TodoForm />
        <ul className="todoList">
          {todos.map(({ title, id }) => {
            return <Todo key={id} title={title} />;
          })}
        </ul>
      </div>
    </section>
  );
}
