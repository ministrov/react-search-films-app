import React from 'react';
import cn from 'classnames';
import FavoriteIconActive from '../favoriteIconActive/FavoriteIconActive';
import FavoriteIcon from '../favoriteIcon/FavoriteIcon';
import styles from './FavoritesButton.module.css';

export default function FavoritesButton({ isFavorite }) {
  return (
    <button className={styles['favorites-button']}>
      {isFavorite ? (
        <>
          <FavoriteIconActive />
          {/* <p className={`${isFavorite ? styles['active'] : ''}`}>В избраном</p> */}
          <p className={cn({
            [styles['active']]: isFavorite
          })}>В избраном</p>
        </>
      ) : (
        <>
          <FavoriteIcon />
          <p>В избранное</p>
        </>
      )}
    </button>
  )
}
