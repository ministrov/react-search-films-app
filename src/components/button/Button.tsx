import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode
  className: string | null
  isDisabled: boolean
}

function Button({ children, className, isDisabled }: ButtonProps) {
  return (
    <button className={cn(styles['button'], {
      [styles['button-big']]: className,
      [styles['button-disabled']]: !isDisabled
    })} disabled={isDisabled}>
      {children}
    </button>
  )
}

export default Button;
