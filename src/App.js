import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState(" ");
  const [todos, setTodos] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(" ");
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>Task</label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" />
      </form>
      {todo && todos.map((item) => <li key={item}>{item}</li>)}
    </div>
  );
}
