import React from 'react';
import './NavMenu.css';

export default function NavMenu({ children }) {
  return (
    <nav className='nav-menu'>
      {children}
    </nav>
  )
}
