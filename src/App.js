import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; 
import { CreateTodoButton} from './CreateTodoButton'
import { TodoItem } from './TodoItem';


const defaultTodos = [
  { text: 'Cortar pollo con plumas xd', completed: true},
  { text: 'Plantillan en React.js', completed: false},
  { text: 'Lloar por el amor de ella xd', completed: false},
  { text: 'C mamó...', completed: false},
];

function App() {
  return (
    <>


      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
         {defaultTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed} />
          ))}
      </TodoList>

     <CreateTodoButton />
    </>
  );
}

export default App;
