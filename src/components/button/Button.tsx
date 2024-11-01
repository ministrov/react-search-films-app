import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode
  className: string | null
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], {
      [styles['button-big']]: className
    })} {...props}>
      {children}
    </button>
  )
}

export default Button;
