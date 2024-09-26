import FavoriteIconActive from '../favoriteIconActive/FavoriteIconActive';
import FavoriteIcon from '../favoriteIcon/FavoriteIcon';
import cn from 'classnames';
import styles from './FavoritesButton.module.css';

export default function FavoritesButton({ isFavorite }: any) {
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
