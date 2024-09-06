import React from 'react';
import './NavMenuItem.css';

export default function NavMenuItem({ icon, label, hasIcon, hasCount, href, isActive }) {
  return (
    <li className={`nav-menu-item ${isActive ? 'active' : ''}`}>
      <a className='nav-menu-link' href={href}>
        {label}
        {hasCount && <span>2</span>}
        {hasIcon && <img src={icon} width={24} height={24} alt="Иконка входа" />}
      </a>
    </li>
  )
}
