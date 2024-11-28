import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode
  className: string | null
}

function Button({ children, className }: ButtonProps) {
  return (
    <button className={cn(styles['button'], {
      [styles['button-big']]: className
    })} type='submit'>
      {children}
    </button>
  )
}

export default Button;
