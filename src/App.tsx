import React from 'react';
import TodoList from './todoList/TodoList'
import {TodoStore} from './todoList/TodoStore'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList  todoStore = {TodoStore} />
    </div>
  );
}

export default App;
