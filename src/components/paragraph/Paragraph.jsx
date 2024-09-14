import React from 'react';
import styles from './Paragraph.module.css';

export default function Paragraph({ children, size = null }) {
  return (
    <p className={`${styles['paragraph']} ${size ? styles['scaled'] : ''}`}>
      {children}
    </p>
  )
}
