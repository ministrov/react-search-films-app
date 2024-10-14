import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode
  className: string | null
  onSubmit: (e: SubmitEvent) => void
}

export default function Button({ children, className, onSubmit, ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], {
      [styles['button-big']]: className
    })} type='submit' {...props}>
      {children}
    </button>
  )
}
