import { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './Search.module.css';

type SearchInputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
}

export default function SearchInput({ isValid, ...props }: SearchInputProps) {
  return (
    <label className={cn(styles['search-input'], {
      [styles['search-input__invalid']]: !isValid
    })} htmlFor="search">
      <input {...props} type="text" name='search' placeholder='Введите название' required />
    </label>
  )
}
