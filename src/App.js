import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'Cortar pollo con plumas xd', completed: true },
  { text: 'Plantillan en React.js', completed: false },
  { text: 'Lloar por el amor de ella xd', completed: false },
  { text: 'C mamó...', completed: false },
  { text: 'Los bricheros', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  // const searchedTodos = todos.filter((todo) => {
  //  return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  // });

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
