import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode
  className: string | null
  onSubmit: () => void
}

export default function Button({ children, className, onSubmit, ...props }: ButtonProps) {
  return (
    <button onSubmit={onSubmit} className={cn(styles['button'], {
      [styles['button-big']]: className
    })} {...props}>
      {children}
    </button>
  )
}
