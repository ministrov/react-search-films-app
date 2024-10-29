import { ChangeEvent, forwardRef, useState } from 'react';
import styles from './EnterInput.module.css';

type EnterInputProps = {
  onChange: (f: string) => void;
}

const EnterInput = forwardRef<HTMLInputElement, EnterInputProps>(function EnterInput({ onChange }: EnterInputProps, ref) {
  const [text, setText] = useState('');

  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    // console.log(text);
    onChange(text);
  }

  return (
    <label className={styles['enter-input']} htmlFor="name">
      <input
        type="text"
        name='name'
        placeholder='Ваше имя'
        onChange={getInputValue}
        value={text}
        ref={ref}
        autoComplete='off'
      />
    </label>
  )
});

export default EnterInput;
