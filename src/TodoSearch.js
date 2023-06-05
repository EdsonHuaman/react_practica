import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder='Cortar Carne'
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
