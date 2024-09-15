import React from 'react';
import styles from './EnterInput.module.css';

export default function EnterInput() {
  return (
    <label className={styles['enter-input']} htmlFor="name">
      <input type="text" name='name' placeholder='Ваше имя' />
    </label>
  )
}
