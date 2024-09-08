import React from 'react';
import './FilmsList.css';

export default function FilmsList({ films }) {
  const listItem = films.map((film) => (
    <li className='films-list-item' key={film.id}>
      <img src={film.poster} alt={`Poster name ${film.title}`} />
      <p>{film.title}</p>
      <p>{film.rating}</p>
    </li>
  ));
  return (
    <ul className='films-list'>
      {listItem}
    </ul>
  )
}
