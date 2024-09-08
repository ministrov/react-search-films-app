import React from 'react';

export default function FilmsList({ films }) {
  return (
    <ul className='films-list'>
      {films.map((film) => (
        <li key={film.id}>
          <img src={film.poster} alt={`Poster name ${film.title}`} />
          <p>{film.title}</p>
          <p>{film.rating}</p>
        </li>
      ))}
    </ul>
  )
}
