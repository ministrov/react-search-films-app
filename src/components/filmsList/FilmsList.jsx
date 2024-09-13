import React from 'react';
import Rating from '../rating/Rating';
import FavoritesButton from '../favoritesButton/FavoritesButton';
import './FilmsList.css';

export default function FilmsList({ films }) {
  const listItem = films.map((film) => (
    <li className='films-list-item' key={film.id}>
      <div className='films-rating-box'>
        <Rating count={film.rating} />
      </div>
      <img src={film.poster} alt={`Poster name ${film.title}`} />
      <div className='films-bottom'>
        <h3>{film.title}</h3>
        <FavoritesButton isFavorite={film.isFavorite} />
      </div>
    </li>
  ));
  return (
    <ul className='films-list'>
      {listItem}
    </ul>
  )
}
