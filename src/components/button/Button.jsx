import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export default function Button({ content, onClick, className = null }) {
  return (
    <button className={cn(styles['button'], {
      [styles['button-big']]: className
    })} onClick={onClick}>
      {content}
    </button>
  )
}
