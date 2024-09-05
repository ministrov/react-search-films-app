import React from 'react';
import './SearchInput.css';

export default function SearchInput() {
  return (
    <label className='search-input' htmlFor="search">
      <input type="text" name='search' placeholder='Введите название'/>
    </label>
  )
}
