import React from 'react';
import star from '../../assets/star.svg';
import styles from './Rating.module.css';

export default function Rating({ count }) {
  return (
    <div className={styles['rating']}>
      <img src={star} alt="Picture of the yellow star" />
      <p>{count}</p>
    </div>
  )
}
