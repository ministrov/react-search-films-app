import React from 'react';
import styles from './Button.module.css';

export default function Button({ content, onClick }) {
  return (
    <button className={styles['button']} onClick={onClick}>
      {content}
    </button>
  )
}
