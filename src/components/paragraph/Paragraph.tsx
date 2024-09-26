import React from 'react';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export default function Paragraph({ children, size = null }) {
  return (
    <p className={cn(styles['paragraph'], {
      [styles['scaled']]: size
    })}>
      {children}
    </p>
  )
}
