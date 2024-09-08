import React from 'react';
import './Header.css';

export default function Header({ children }) {
  return (
    <header className='header'>
      <div className='container'>
        {children}
      </div>
    </header>
  )
}
