
import './App.css';
import React from 'react';
import TodoForm from './components/todoForm.jsx'

function App() {

  return (
    <div> 
    <div className="todo-app">
      <h1>what's the plan for today?</h1>
      <TodoForm />
    </div>
    </div>
  );
}

export default App;
