import React, { forwardRef } from 'react';
import styles from './EnterInput.module.css';

const EnterInput = forwardRef(function EnterInput({ values, onChange }, ref) {
  return (
    <label className={styles['enter-input']} htmlFor="name">
      <input type="text" name='name' placeholder='Ваше имя' onChange={onChange} value={values} ref={ref} />
    </label>
  )
});

export default EnterInput;
