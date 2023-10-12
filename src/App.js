import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleAdd(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function handleDelete(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleToggle(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  return (
    <main id="todo-list" className="todo-list">
      <Header />
      {todoList.length !== 0 ? (
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onDone={handleToggle}
              setTodoList={setTodoList}
            />
          ))}
        </ul>
      ) : (
        <p>You dont have anything to do right now.</p>
      )}
      <Form handleAdd={handleAdd} />
    </main>
  );
}

export default App;
