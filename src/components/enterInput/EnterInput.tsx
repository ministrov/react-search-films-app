import { ChangeEvent, forwardRef, useState } from 'react';
import styles from './EnterInput.module.css';

type EnterInputProps = {
  onChange: (f: string) => void;
}

function EnterInput({ onChange }: EnterInputProps) {
  const [text, setText] = useState('');

  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    // console.log(text);
    onChange(text);
  }

  return (
    <div className={styles['enter-input']}>
      <label htmlFor="name"></label>
      <input
        type="text"
        name='name'
        placeholder='Ваше имя'
        onChange={getInputValue}
        value={text}
        autoComplete='off'
      />
    </div>
  )
};

export default EnterInput;
