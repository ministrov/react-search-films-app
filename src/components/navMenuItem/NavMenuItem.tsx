import React from 'react';
import './NavMenuItem.css';

export default function NavMenuItem({ children, href }) {
  return (
    <a className='nav-menu-link' href={href}>
      {children}
    </a>
  )
}
