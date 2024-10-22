import FavoriteIconActive from '../favoriteIconActive/FavoriteIconActive';
import FavoriteIcon from '../favoriteIcon/FavoriteIcon';
import cn from 'classnames';
import styles from './FavoritesButton.module.css';

type FavoritesButtonProps = {
  isFavorite: boolean
}

export default function FavoritesButton({ isFavorite }: FavoritesButtonProps) {
  return (
    <button className={styles['favorites-button']}>
      {isFavorite ? (
        <>
          <FavoriteIconActive />
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
