import { useState } from "react";
import "./App.css";
import AppName from "./Compo/AppName";
import AddTodo from "./Compo/AddTodo";

import "./App.css";
import TodoItems from "./Compo/TodoItems";
import WelcomeMessage from "./Compo/WelcomeMessage";

function App() {
  const startingtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2025",
    },
    {
      name: "Hello Bhai",
      dueDate: "2025/10/1",
    },
  ];

  const [todoItems, setTodoItems] = useState(startingtodoItems);

  const handleNewItem = (todoName, todoDate) => {
    console.log(todoName, todoDate);
    const newTodoItems = [
      ...todoItems,
      { name: todoName, dueDate: todoDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoName) => {
    console.log(todoName);
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);

    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
``
      <AddTodo onNewItem={handleNewItem} />
      <br />

      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems TodoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
