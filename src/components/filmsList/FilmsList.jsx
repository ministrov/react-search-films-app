import React from 'react';
import Rating from '../rating/Rating';
import FavoritesButton from '../favoritesButton/FavoritesButton';
import styles from './FilmsList.module.css';

export default function FilmsList({ films }) {
  const listItem = films.map((film) => (
    <li className={styles['films-list-item']} key={film.id}>
      <div className={styles['films-rating-box']}>
        <Rating count={film.rating} />
      </div>
      <img src={film.poster} alt={`Poster name ${film.title}`} />
      <div className={styles['films-bottom']}>
        <h3>{film.title}</h3>
        <FavoritesButton isFavorite={film.isFavorite} />
      </div>
    </li>
  ));
  return (
    <ul className={styles['films-list']}>
      {listItem}
    </ul>
  )
}
