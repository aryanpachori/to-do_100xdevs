import React, { useState ,useEffect } from "react";
import { Todos } from "./components/Todos";
import { CreateTodo } from "./components/createTodo";

function App() {
  const [todos, SetTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        SetTodos(json.todos);
      });
  }, []);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
