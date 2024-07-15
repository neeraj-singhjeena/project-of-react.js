// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
function App() {
  return (
    <center className="toto-content">
      <h1>Todo app</h1>

      <AddTodo></AddTodo>
      <AppName></AppName>
      <TodoItem1></TodoItem1>
    </center>
  );
}

export default App;
