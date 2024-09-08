import React from 'react';
import './FilmsList.css';
import Rating from '../rating/Rating';

export default function FilmsList({ films }) {
  const listItem = films.map((film) => (
    <li className='films-list-item' key={film.id}>
      <img src={film.poster} alt={`Poster name ${film.title}`} />
      <p>{film.title}</p>
      <div className='films-rating-box'>
        <Rating count={film.rating}/>
      </div>
    </li>
  ));
  return (
    <ul className='films-list'>
      {listItem}
    </ul>
  )
}
