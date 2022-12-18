// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'cortar tomate', completed: false},
  {text: 'cortar papa', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
   
      <CreateTodoButton/>
       
       
    </React.Fragment>
     );
}

export default App;
