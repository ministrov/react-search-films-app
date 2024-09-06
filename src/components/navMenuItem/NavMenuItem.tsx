import React from 'react';
import './NavMenuItem.css';

export default function NavMenuItem({ children, href, isActive }) {
  return (
    <li className={`nav-menu-item ${isActive ? 'active' : ''}`}>
      <a className='nav-menu-link' href={href}>
        {children}
      </a>
    </li>
  )
}
