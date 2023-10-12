import { useState } from "react";

export const Form = ({ handleAdd }) => {
  const [todoInput, setTodoInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (todoInput === "") {
      document.getElementById("todo-list").classList.toggle("shake");
      return null;
    }
    setTodoInput("");

    const newTodo = {
      id: Date.now(),
      title: todoInput,
      done: false,
      date: new Date(),
    };

    handleAdd(newTodo);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2 htmlFor="todo">Add new todo to list.</h2>
      <div>
        <input
          type="text"
          placeholder="Enter new todo..."
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
        <button>Add</button>
      </div>
    </form>
  );
};
