import { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';
import SearchIcon from '../searchIcon/SearchIcon';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  icon: boolean;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isValid, placeholder, onChange, icon, ...props }, ref) => {
  console.log(isValid);
  return (
    <div className={cn(styles['input'], {
      [styles['input__invalid']]: !isValid
    })}>
      <label htmlFor="user-name"></label>
      {icon ? <SearchIcon /> : ''}
      <input id='user-name' {...props} ref={ref} type={'text'} onChange={onChange} placeholder={placeholder} required={isValid} />
    </div>
  );
}
);

export default Input;
