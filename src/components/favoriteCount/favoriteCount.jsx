import React from 'react';
import styles from './FavoriteCount.module.css';

export default function FavoriteCount({ count }) {
  return (
    <span className={styles['count']}>{count}</span>
  )
}
