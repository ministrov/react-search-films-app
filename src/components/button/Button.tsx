// import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  content: string;
  onClick: () => void
  className: string | null
}

export default function Button({ content, onClick, className = null }: ButtonProps) {
  return (
    <button className={cn(styles['button'], {
      [styles['button-big']]: className
    })} onClick={onClick}>
      {content}
    </button>
  )
}
