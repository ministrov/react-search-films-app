import { useEffect, useState } from 'react';
import FavoriteIconActive from '../favoriteIconActive/FavoriteIconActive';
import FavoriteIcon from '../favoriteIcon/FavoriteIcon';
import { FilmsDescription } from '../../interfaces/films-description.interface';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import styles from './FavoritesButton.module.css';
import { addUserToFavorites, removeUserFavorites } from '../../store/user.slice';

type FavoritesButtonProps = {
  film: FilmsDescription;
}

function FavoritesButton({ film }: FavoritesButtonProps) {
  const [favActive, setFavActive] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const favoritesList = useSelector((state: RootState) => state.profile.favorites);

  useEffect(() => {
    if (favoritesList.find(el => el.id === film["#IMDB_ID"])) {
      setFavActive(true);
    }

  }, [favoritesList, setFavActive, film]);

  function onClickHandler() {
    if (!favActive) {
      dispatch(addUserToFavorites(film));
    } else {
      dispatch(removeUserFavorites(film));
    }

    setFavActive(favActive => !favActive);
  };

  return (
    <button className={styles['favorites-button']} onClick={onClickHandler} >
      {favActive ? (
        <>
          <FavoriteIconActive />
          <p className={cn({
            [styles['active']]: favActive
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

export default FavoritesButton;