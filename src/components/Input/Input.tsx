import { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';
import SearchIcon from '../searchIcon/SearchIcon';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  icon: boolean;
  type: string;
  placeholder: string;
}

function Input({ type = 'text', isValid, placeholder, onChange, icon, ...props }: InputProps) {
  return (
    <div className={cn(styles['input'], {
      [styles['input__invalid']]: !isValid
    })}>
      {icon ? <SearchIcon /> : ''}
      <input {...props} type={type} onChange={onChange} placeholder={placeholder} required />
    </div>
  )
}

export default Input;
