import React from 'react';
import star from '../../assets/star.svg';
import './Rating.css';

export default function Rating({ count }) {
  return (
    <div className='rating'>
      <img src={star} alt="Picture of the yellow star" />
      <p>{count}</p>
    </div>
  )
}
