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

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid, placeholder, onChange, icon, ...props }, ref) {
  return (
    // <label className={cn(styles['input'], styles['input__label'], {
    //   [styles['input__invalid']]: !isValid
    // })}>
    //   {icon ? <SearchIcon /> : ''}
    //   <input {...props} className={cn(styles['input'], styles['input__input'], {
    //     [styles['input__invalid']]: !isValid
    //   })} ref={ref} onChange={onChange} placeholder={placeholder} required={isValid} />
    // </label>

    <input {...props} className={cn(styles['input'], styles['input__input'], {
      [styles['input__invalid']]: !isValid
    })} ref={ref} onChange={onChange} required={isValid} />
  );
}
);

export default Input;
